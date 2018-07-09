// @flow
export type Team = {
  id: number,
  name: string,
  simpleName: string,
  abbreviation: string,
  location: string
};

export type PlayerFormData = {
  firstName: string,
  lastName: string,
  teamId: number
};

export type Player = {
  id: number,
  firstName: string,
  lastName: string,
  team: Team
};

export type PlayersApi = {
  get(string): Promise<{ data: Player }>,
  find(options?: { skip: number, limit: number }): Promise<{
    data: Array<Player>
  }>,
  create(PlayerFormData): Promise<Array<Player>>,
  update(id: number, PlayerFormData): Promise<Array<Player>>
};

export type TeamsApi = {
  get(string): Promise<Team>,
  find(options?: { skip: number, limit: number }): Promise<Array<Player>>
};
