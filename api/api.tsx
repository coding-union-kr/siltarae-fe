import axios from "axios";

export async function testGetData() {
  try {
    // 응답성공
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    console.log(response);
  } catch (err) {
    // 응답실패
    console.log(err);
  }
}

export async function testGetImageData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export async function testGetUsersData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export async function testGetTodoData() {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { userId: 1, title: "delectus aut autem" },
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
