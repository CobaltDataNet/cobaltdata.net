# Use Node to build the frontend
# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:20 AS build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

ARG VITE_API_URL=${VITE_API_URL}
COPY . .  # Ensure all files, including index.html, are copied

RUN npm run build


# Use Nginx for serving the files
FROM nginx:1.27.4

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx

COPY --from=build-stage /app/dist/ /usr/share/nginx/html

COPY ./nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
