import http from "../http";

function getUsers() {
  return new Promise((resolve, reject) => {
    http(`https://jsonplaceholder.typicode.com/users`, "get")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getUserAvatar({ username }) {
  return new Promise((resolve, reject) => {
    http(
      `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`,
      "get"
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { getUsers, getUserAvatar };
