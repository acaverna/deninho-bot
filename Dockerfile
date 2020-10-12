FROM node:lts-buster-slim

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm nodemon

ENV NODE_ENV="development"

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/library/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/library
RUN npm install --silent --progress=false --cache /tmp/empty-cache

USER root
COPY . $HOME/library
RUN chown -R app:app $HOME/*
USER app

EXPOSE 9000

CMD nodemon -L --watch . index.js
