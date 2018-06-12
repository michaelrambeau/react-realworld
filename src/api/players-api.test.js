import createApi from "./players-api";
import data from "./players.json";

const api = createApi({ immediate: true });

test("`findAll` should return a list of player", async () => {
  const players = await api.findAll();
  expect(players.length).toBe(data.length);
});

test("`findById` should return a single player", async () => {
  const player = await api.findById(1);
  expect(player.name).toBe("Michael Jordan");
});
