FROM node AS build-env

WORKDIR /usr/src/app

COPY . ./

RUN echo "Building front..." \
  && npm i \
  && npm run build

FROM nginx:stable
WORKDIR /usr/share/nginx/html
COPY --from=build-env /usr/src/app/build/. ./
COPY bonanza.conf /etc/nginx/conf.d/bonanza.conf
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80
