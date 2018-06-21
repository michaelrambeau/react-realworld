import createApi from "./auth-api";

const api = createApi({ delay: 0 });

test(`It should return user's full name when credentials are valid`, async () => {
  const user = await api.login({ username: "mike" });
  const { fullName } = user;
  expect(fullName).toBe("Michael Jordan");
});

test(`It should return user's full name when credentials are valid`, async () => {
  const user = await api.login({ username: "kevin" });
  const { fullName } = user;
  expect(fullName).toBe("Kevin Durant");
});

test(`It should throw an error when the credentials are not valid`, async () => {
  const invalidLogin = () => api.login({ username: "XXX" });
  await expect(invalidLogin()).rejects.toThrow(/Invalid/);
});
