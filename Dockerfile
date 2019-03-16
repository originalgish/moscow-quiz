FROM node

WORKDIR /usr/src/app

COPY . ./

RUN echo "Building front..." \
  && npm i \
  && npm run build
