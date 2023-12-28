FROM node:20.10.0

WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# 소스 코드 복사
COPY . .

RUN yarn add next

# 애플리케이션 빌드
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
