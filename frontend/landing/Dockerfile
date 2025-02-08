# Stage 0: Build Frontend
FROM node:20 AS build-stage

WORKDIR /app

# Copy frontend package.json first for caching
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN npm install --prefix ./frontend

# Copy frontend source files
COPY frontend/ ./frontend/
WORKDIR /app/frontend
RUN npm run build

# Stage 1: Build Landing Page Separately
WORKDIR /app/frontend/landing

# Copy landing package.json first
COPY frontend/landing/package.json frontend/landing/package-lock.json ./
RUN npm install

# Copy landing page source files
COPY frontend/landing ./  
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.27.4

# Copy built frontend to Nginx web directory
COPY --from=build-stage /app/frontend/dist/ /usr/share/nginx/html/

# Copy built landing page to a separate subfolder
COPY --from=build-stage /app/frontend/landing/dist/ /usr/share/nginx/html/landing/

# Copy Nginx config
COPY ./nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
