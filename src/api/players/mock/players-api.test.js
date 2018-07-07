import createApi from "./players-api";
import allPlayers from "./players.json";

const api = createApi({ delay: 0 });

test("`find` should return a list of player", async () => {
  const { data } = await api.find();
  expect(data.length).toBe(allPlayers.length);
});

test("`find` should return a single player", async () => {
  const { data } = await api.get(1);
  expect(data.lastName).toBe("Curry");
  expect(data.team.abbreviation).toBe("GSW");
});

test("`update` should update a player", async () => {
  await api.update(1, { teamId: 3, firstName: "Steph" });
  const { data } = await api.get(1);
  expect(data.firstName).toBe("Steph");
  expect(data.team.id).toBe(3);
});
