FROM node:16-slim AS development

RUN apt-get -y update && apt-get install -y openssl
RUN openssl version -v

# Install wait-for-it
RUN apt-get install -y wait-for-it

WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock ./
COPY --chown=node:node prisma/* ./prisma/

COPY --chown=node:node . .

RUN yarn install

RUN yarn prisma generate

RUN yarn run build

EXPOSE 3000

# CMD [ "yarn", "run", "start:prod" ]
CMD ["wait-for-it", "mongo:27017", "--", "yarn", "run", "start:prod"]
