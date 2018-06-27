// @flow
export type User = {
  username: string,
  fullname: string,
  team: string
}

export type LoginResponse = {
  isAuthenticated: boolean,
  user: ?User
}

export type LoginForm = {username: string}
export type Login = (LoginForm) => Promise<LoginResponse>
export type Logout = () => Promise<boolean>

export type AuthAPI = {
  login(LoginForm): Promise<LoginResponse>,
  logout(): Promise<boolean> ,
  checkIsAuthenticated(): Promise<LoginResponse>
}

export type Storage = {
  get(string): any,
  set(string, any): void,
  delete(string, any): void 
}