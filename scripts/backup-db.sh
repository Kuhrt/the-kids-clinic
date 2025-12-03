#!/bin/bash
set -e

# Database backup script
BACKUP_DIR="/opt/the-kids-clinic/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/tkc_backup_$TIMESTAMP.sql"

# Create backup directory if not exists
mkdir -p "$BACKUP_DIR"

# Load environment variables
source /opt/the-kids-clinic/.env

echo "Creating database backup..."

docker exec tkc-postgres pg_dump \
    -U "$POSTGRES_USER" \
    -d "$POSTGRES_DB" \
    > "$BACKUP_FILE"

# Compress backup
gzip "$BACKUP_FILE"

echo "Backup created: ${BACKUP_FILE}.gz"

# Keep only last 7 days of backups
find "$BACKUP_DIR" -name "*.sql.gz" -mtime +7 -delete

echo "Old backups cleaned up (keeping 7 days)"
