// https://stickode.tistory.com/758

const setCookie = (name: string, value: string, expireDay: number) => {
  const date = new Date();
  date.setTime(date.getTime() + expireDay * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};`;
};

export default setCookie;
