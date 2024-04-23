FROM node:20.12.2-alpine

ARG RESEND_API_KEY
ARG RESEND_FROM_EMAIL

ENV RESEND_API_KEY=${RESEND_API_KEY}
ENV RESEND_FROM_EMAIL=${RESEND_FROM_EMAIL}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npx", "next", "start", "-p", "3000"]

EXPOSE 3000
