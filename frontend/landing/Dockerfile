# Stage 1: Build the Entire Frontend (Including Landing)
FROM node:20 AS build-stage

WORKDIR /app

# Copy package files first for caching
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy all frontend files, including `landing/`
COPY frontend/ ./frontend/
WORKDIR /app/frontend

# Build the entire frontend
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.27.4

# Copy the built frontend to Nginx web directory
COPY --from=build-stage /app/frontend/dist/ /usr/share/nginx/html/

# Copy Nginx config
COPY ./nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
