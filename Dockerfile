FROM node AS build-env
WORKDIR /usr/src/app

COPY . ./

RUN npm i \
  && npm run build



FROM nginx:stable

RUN mkdir /etc/nginx/ssl && chmod -R 600 /etc/nginx/ssl/ \
  && rm /etc/nginx/conf.d/default.conf

COPY --from=build-env /usr/src/app/build/. /usr/share/nginx/html
COPY bonanza.conf /etc/nginx/conf.d/bonanza.conf
COPY ssl/quizclub.app.chained.crt ssl/quizclub.app.key /etc/nginx/ssl/

EXPOSE 443
