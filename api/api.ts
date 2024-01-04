import axios from "axios";

const loginToken = process.env.NEXT_PUBLIC_LOGIN_TOKEN;

export default axios.create({
  baseURL: "https://api.siltarae.me/api/v1",
  headers: {
    Authorization: `Bearer ${loginToken}`,
  },
});
