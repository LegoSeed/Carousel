FROM node:latest

ENV NODE_ENV=production

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./ 

RUN npm install --production

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "start" ]

