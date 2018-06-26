// @flow
import users from "./users.json";

import type { User, AuthAPI } from "./auth-types";
import {delaySuccess} from '../utils'
const firstUser = users[0]

// Given a username return a "user" object
function findUser(username: string): ?User {
  return users.find(user => user.username === username);
}

function createAuthApi(options: { delay?: number }): AuthAPI {
  const { delay = 100 } = options;
  return {
    login: function({ username }) {
      const user = findUser(username);
      return delaySuccess({ isAuthenticated: !!user, user }, delay);
    },
    logout() {
      return delaySuccess(true, delay);
    },
    checkIsAuthenticated() {
      return delaySuccess({isAuthenticated: true, user:firstUser}, delay);
    }
  };
}

export default createAuthApi;
