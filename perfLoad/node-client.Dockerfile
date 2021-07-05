## Stage 1 (production base)
# This gets our prod dependencies installed and out of the way
FROM node:alpine as base
EXPOSE 3000
ENV NODE_ENV=production
WORKDIR /usr
# COPY ./src/node-client/package*.json ./
# # we use npm ci here so only the package-lock.json file is used
# RUN npm ci \
#     && npm cache clean --force
COPY ./src/node-client/package.json ./
# we use npm ci here so only the package-lock.json file is used
RUN npm i \
    && npm cache clean --force

## Stage 2 (development)
# we don't COPY in this stage because for dev you'll bind-mount anyway
# this saves time when building locally for dev via docker-compose
FROM base as dev
ENV NODE_ENV=development
ENV PATH=/usr/node_modules/.bin:$PATH
WORKDIR /usr
RUN npm install --only=development
WORKDIR /usr/app
CMD ["nodemon", "-L", "index.js"]

## Stage 3 (copy in source for prod)
# This gets our source code into builder
# this stage starts from the first one and skips dev
FROM base as prod
WORKDIR /usr/app
COPY ./src/node-client/ .
CMD ["node", "index.js"]