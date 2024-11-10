# Stage 1: Base Stage
FROM node:18-alpine as base

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Development Stage
FROM base as dev
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# Stage 3: Production Build Stage
FROM node:18-alpine as build
WORKDIR /app
COPY --from=base /app /app
RUN npm run build

# Final Stage: Nginx to Serve Built Files with SSL
FROM nginx:alpine as prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443 
CMD ["nginx", "-g", "daemon off;"]
