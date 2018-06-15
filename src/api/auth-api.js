import { randomDelay /*delayError*/ } from "./utils";

function createAuthApi() {
  const login = () => randomDelay();
  const logout = () => randomDelay();
  const checkIsAuthenticated = () => randomDelay(false);
  const defaultValues = {
    isAuthenticated: true,
    pending: false
  };
  return {
    login,
    logout,
    checkIsAuthenticated,
    defaultValues
  };
}

export default createAuthApi;
