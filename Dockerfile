FROM node:20.12.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000
