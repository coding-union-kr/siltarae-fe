FROM node:20.10.0
EXPOSE 3000

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

RUN yarn add next

CMD ["yarn", "start"]