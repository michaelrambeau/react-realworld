import users from "./users.json";

// Given a username return a "user" object
function findUser(username) {
  return users.find(user => user.username === username);
}

// Resolve with a value, after a given delay (in ms)
function delaySuccess(value, delay = 1000) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay, value);
  });
}

// Reject with a value, after a given delay (in ms)
function delayError(errorObject, delay = 1000) {
  return new Promise(function(resolve, reject) {
    setTimeout(reject, delay, errorObject);
  });
}

function createApi({ delay = 1000 } = {}) {
  return {
    login({ username }) {
      const user = findUser(username);
      return user
        ? delaySuccess(user, delay)
        : delayError(new Error("Invalid credentials"), delay);
    },
    logout() {
      return delaySuccess("Logout OK");
    },
    checkIsAuthenticated() {
      return delaySuccess(true);
    }
  };
}

export default createApi;
