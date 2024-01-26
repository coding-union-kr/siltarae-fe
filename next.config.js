/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // 더 나은 이미지 최적화를 위해서 next에서 제공하는 Image 태그 설정
  // 임의로 일단 주석처리 해놓겠습니다.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "weavers-siltarae.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/profile/*",
      },
    ],
  },
};

module.exports = nextConfig;
