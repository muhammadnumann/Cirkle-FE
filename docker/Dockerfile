FROM node:18.6.0-alpine3.16

RUN mkdir -p /app
WORKDIR /app

COPY ../package*.json /app

RUN npm install

COPY .. /app

EXPOSE 3000

CMD ["npm", "run", "dev"]
