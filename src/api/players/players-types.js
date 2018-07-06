// @flow
export type Player = {
  id: number,
  name: string,
  team: string
};

export type PlayersAPI = {
  add(Player): Promise<Array<Player>>,
  edit(Player): Promise<Array<Player>>,
  findAll(): Promise<Array<Player>>,
  findById(string): Promise<Player>
};
≤