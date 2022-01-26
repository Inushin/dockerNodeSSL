FROM node:17-alpine3.12

RUN mkdir /root/app

WORKDIR /root/app

COPY /data/nginx/node/package*.json ./

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
