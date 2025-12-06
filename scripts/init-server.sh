#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== The Kids Clinic - Server Initialization ===${NC}"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}Please run as root (sudo)${NC}"
  exit 1
fi

# Update system
echo -e "${YELLOW}Updating system packages...${NC}"
apt update && apt upgrade -y

# Install Docker
echo -e "${YELLOW}Installing Docker...${NC}"
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    systemctl enable docker
    systemctl start docker
else
    echo "Docker already installed"
fi

# Install Docker Compose plugin
echo -e "${YELLOW}Installing Docker Compose...${NC}"
apt install -y docker-compose-plugin

# Install Git
echo -e "${YELLOW}Installing Git...${NC}"
apt install -y git

# Create application directory
echo -e "${YELLOW}Setting up application directory...${NC}"
mkdir -p /opt/the-kids-clinic
cd /opt/the-kids-clinic

# Clone repository (if not exists)
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Cloning repository...${NC}"
    echo "Please enter your GitHub repository URL:"
    read REPO_URL
    git clone "$REPO_URL" .
fi

# Create .env file if not exists
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}Creating .env file from example...${NC}"
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo -e "${RED}IMPORTANT: Edit /opt/the-kids-clinic/.env with your production values!${NC}"
    else
        echo -e "${RED}No .env.example found. Please create .env manually.${NC}"
    fi
fi

# Set up deploy user
echo -e "${YELLOW}Setting up deploy user...${NC}"
if ! id "deploy" &>/dev/null; then
    useradd -m -s /bin/bash deploy
    usermod -aG docker deploy
    echo -e "${GREEN}Created 'deploy' user and added to docker group${NC}"
fi

# Set permissions
chown -R deploy:deploy /opt/the-kids-clinic

echo -e "${GREEN}=== Server initialization complete! ===${NC}"
echo ""
echo "Next steps:"
echo "1. Edit /opt/the-kids-clinic/.env with your production values"
echo "2. Set up SSH key for 'deploy' user (for GitHub Actions)"
echo "3. Run: docker compose up -d to start the application"
echo "4. Ensure Cloudflare DNS A records point to this server's IP"
