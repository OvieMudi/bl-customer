FROM node:14.17.5-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm run build

COPY . .
EXPOSE 3001

CMD [ "npm", "start" ]