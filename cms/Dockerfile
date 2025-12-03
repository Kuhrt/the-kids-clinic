FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV DATABASE_CLIENT=postgres
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 strapi
RUN adduser --system --uid 1001 strapi

# Copy built application
COPY --from=builder --chown=strapi:strapi /app/dist ./dist
COPY --from=builder --chown=strapi:strapi /app/node_modules ./node_modules
COPY --from=builder --chown=strapi:strapi /app/package.json ./package.json
COPY --from=builder --chown=strapi:strapi /app/public ./public
COPY --from=builder --chown=strapi:strapi /app/config ./config
COPY --from=builder --chown=strapi:strapi /app/src ./src
COPY --from=builder --chown=strapi:strapi /app/database ./database

USER strapi

EXPOSE 1337

ENV PORT=1337
ENV HOST=0.0.0.0

CMD ["npm", "run", "start"]
