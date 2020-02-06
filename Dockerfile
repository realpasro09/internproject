FROM node:8-alpine as builder
COPY package.json yarn.lock ./
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN yarn install && mkdir /dash && cp -R ./node_modules ./dash
WORKDIR /dash
COPY . .
## Build the angular app in production mode and store the artifacts in dist folder
RUN yarn build
FROM nginx:1.15-alpine
## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /dash/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]