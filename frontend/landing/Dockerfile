# Stage 0: Build Main Frontend
FROM node:20 AS frontend-build

WORKDIR /app

# Copy main frontend dependencies
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN npm install --prefix ./frontend

# Copy main frontend files and build
COPY frontend/ ./frontend/
WORKDIR /app/frontend
RUN npm run build

# Stage 1: Build Landing Page Separately
FROM node:20 AS landing-build

WORKDIR /app

# Copy landing page dependencies
COPY frontend/landing/package.json frontend/landing/package-lock.json ./landing/
RUN npm install --prefix ./landing

# Copy landing page files and build
COPY frontend/landing ./landing/
WORKDIR /app/landing
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.27.4

# Copy built frontend to Nginx web directory
COPY --from=frontend-build /app/frontend/dist/ /usr/share/nginx/html/

# Copy built landing page to `/landing`
COPY --from=landing-build /app/landing/dist/ /usr/share/nginx/html/landing/

# Copy Nginx config
COPY ./nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
