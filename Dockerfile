FROM node:18 as build-step

RUN mkdir -p /app

WORKDIR /app

RUN npm install -g npm@9.6.7

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build:ssr --prod

####

FROM nginx:1.23.4-alpine

COPY --from=build-step /app/dist/Platform16/server /usr/share/nginx/html
COPY --from=build-step /app/dist/Platform16/browser /usr/share/nginx/html
