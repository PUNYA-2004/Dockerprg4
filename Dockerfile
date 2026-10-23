FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install express

EXPOSE 3000

CMD ["node", "index.js"]
