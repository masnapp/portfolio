# Pull the official base image
FROM node:alpine AS build-stage
LABEL stage=builder

# Set working direction
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /portfolio/node_modules/.bin:$PATH

# Install application dependencies
COPY package*.json /app/
RUN npm install

# Copy files 
COPY . .

# Create a react production build
RUN npm run build

# Get the latest image from nginx
FROM nginx:alpine

# Copy the react app to nginx html directory 
COPY --from=build-stage /app/build/ /usr/share/nginx/html
#COPY ./certs /etc/nginx/conf.d
#COPY ./certs/conf/default.conf /etc/nginx/conf.d/