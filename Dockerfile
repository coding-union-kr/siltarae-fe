FROM node:20.10.0

# 열어둘 포트 설정
EXPOSE 3000

WORKDIR /app

# package.json 및 package-lock.json을 먼저 복사해서 종속성을 더 빨리 설치할 수 있도록 합니다.
COPY package.json yarn.lock ./

RUN yarn install

# 어플리케이션 파일 복사
COPY . .

# .env.production 파일을 복사하여 .env 파일로 사용
COPY .env.production .env.production

RUN yarn add next

# 빌드
RUN yarn build

# 실행 명령어
CMD ["yarn", "start"]