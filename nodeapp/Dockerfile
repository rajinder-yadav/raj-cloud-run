FROM node:10-alpine
WORKDIR /opt/app

COPY package*.json ./
RUN npm install

COPY . ./
EXPOSE 8080
ENTRYPOINT [ "node", "main.js" ]
