// @flow
/**
 * API mock
 */
import data from "./players.json";
import teams from "./teams";
import { randomDelay /*delayError*/ } from "../../utils";
import type {
  PlayersApi,
  Player,
  Team,
  PlayerFormData
} from "../players-types";

const allTeams: Array<Team> = teams;

const findTeamById = (id: string): ?Team =>
  allTeams.find(item => item.id === id);
const populate = (player: any): Player => {
  const { teamId, ...rest } = player;
  const team: ?Team = findTeamById(teamId);
  if (!team) console.error("Nothing", teamId);
  return { ...rest, team };
};

const createApi = (options: { delay: number }): PlayersApi => {
  const { delay } = options;
  // it's the first time I use `let`, usually it's bad!
  let players = data.slice();
  const findById = id => {
    const number = parseInt(id, 10);
    return players.find(player => player.id === number);
  };
  const send = data => randomDelay(data, delay);
  return {
    create(player) {
      // Caution: it's not good to use `push` method because it mutates array!
      // but here we are mocking a distant API so it's OK.
      players.push({
        ...player,
        id: Math.max(...players.map(item => item.id)) + 1
      });
      return send(players);
    },
    update(id: number, data: PlayerFormData) {
      players = players.map(
        player => (id === player.id ? { ...player, ...data } : player)
      );
      return send(players);
    },
    get(id) {
      const data = populate(findById(id));
      return send({ data });
    },
    find() {
      const foundPlayers = players.map(populate);
      return send({ data: foundPlayers });
    },
    count() {
      return send(players.length);
    }
  };
};

export default createApi;
