
FROM node:15.3.0-alpine3.10


# COPY [local] [VM]
COPY src /workdir/src

COPY package*.json /workdir/

WORKDIR /workdir

RUN npm install --quiet || cat npm-debug.log


CMD ["npm", "start"]