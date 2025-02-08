# Stage 0: Build Frontend (React + TypeScript)
FROM node:20 AS build-stage

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build main frontend app
RUN npm run build

# Stage 1: Build Landing Page (Separate Build)
WORKDIR /app/frontend/landing

COPY frontend/landing/package.json frontend/landing/package-lock.json ./
RUN npm install

# Copy the landing files and build separately
COPY frontend/landing .  
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.27.4

# Copy built frontend to Nginx web directory
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

# Copy built landing page to a separate subfolder
COPY --from=build-stage /app/frontend/landing/dist/ /usr/share/nginx/html/landing

# Copy Nginx config
COPY ./nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
