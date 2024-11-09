# Stage 1: Base Stage
# This base stage installs dependencies and is used as the foundation for both development and production
FROM node:18-alpine as base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Stage 2: Development Stage
# This stage starts Vite's development server with live reloading
FROM base as dev

# Expose Vite's default port
EXPOSE 5173

# Run Vite development server for live updates
CMD ["npm", "run", "dev", "--", "--host"]

# Stage 3: Production Stage
# This stage builds the app and serves it with Nginx
FROM node:18-alpine as build

# Use the base stage as the source for building production files
WORKDIR /app
COPY --from=base /app /app

# Build the app
RUN npm run build

# Final Stage: Nginx to Serve Built Files
FROM nginx:alpine as prod

# Copy the built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose Nginx's port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
