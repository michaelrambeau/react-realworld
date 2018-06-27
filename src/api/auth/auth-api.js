// @flow
import users from "./users.json";

import type { User, AuthAPI, Storage } from "./auth-types";
import {delaySuccess} from '../utils'

// Given a username return a "user" object
function findUser(username: string): ?User {
  return users.find(user => user.username === username);
}

function createAuthApi(options: { delay?: number, storage: Storage }): AuthAPI {
  const { delay = 100, storage } = options;
  return {
    login: function({ username }) {
      const user = findUser(username);
      if (user) storage.set('username', username)
      return delaySuccess({ isAuthenticated: !!user, user }, delay);
    },
    logout() {
      storage.delete('username')
      return delaySuccess(true, delay);
    },
    checkIsAuthenticated() {
      const username = storage.get('username')
      const user = username && findUser(username)
      return delaySuccess({isAuthenticated: !!user, user}, delay);
    }
  };
}

export default createAuthApi;
