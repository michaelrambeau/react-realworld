// @flow
export type User = {
  username: string,
  fullname: string
}
export type LoginResponse = {
  isAuthenticated: boolean,
  user: ?User
} 
export type AuthAPI = {
  login(options: {username: string}): Promise<LoginResponse>,
  logout(): Promise<boolean>,
  checkIsAuthenticated(): Promise<LoginResponse>

}