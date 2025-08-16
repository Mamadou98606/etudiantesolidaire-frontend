FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json first
COPY package.json ./

# Install dependencies (pnpm will create lock file if needed)
RUN pnpm install

# Copy source code
COPY . .

# Build the app
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["pnpm", "run", "preview"]
