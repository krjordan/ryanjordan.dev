ARG RESEND_API_KEY
ARG RESEND_FROM_EMAIL

FROM node:20.12.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./

ENV RESEND_API_KEY=${RESEND_API_KEY}
ENV RESEND_FROM_EMAIL=${RESEND_FROM_EMAIL}

RUN npm install

COPY . .

RUN npm run build

CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000
