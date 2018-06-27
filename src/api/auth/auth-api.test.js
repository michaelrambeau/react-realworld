import createApi from "./auth-api";
const storage = {
  get: key => 'mike',
  set: (key, value) => null,
  delete: (key) => null
};
const api = createApi({ delay: 0, storage });

test(`It should return user's full name when credentials are valid`, async () => {
  const {isAuthenticated, user} = await api.login({ username: "mike" });
  const { fullName } = user;
  expect(isAuthenticated).toBe(true)
  expect(fullName).toBe("Michael Jordan");
});


test(`It should throw an error when the credentials are not valid`, async () => {
  const {isAuthenticated, user} = await api.login({ username: "XXX" });
  expect(user).toBe(undefined)
  expect(isAuthenticated).toBe(false)
});
