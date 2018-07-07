// @flow
import type { Team } from "../players-types";
import type { RestApi } from "../../types";
import data from "./teams.json";
import { randomDelay /*delayError*/ } from "../../utils";

const allTeams: Array<Team> = data;

class TeamApi implements RestApi {
  // Private method "send" using the "class field syntax"
  send: <T>(T) => Promise<T>;
  constructor(options: { delay: number }) {
    const { delay } = options;
    this.send = data => randomDelay(data, delay);
  }
  get(id: string): Promise<{ data: ?Team }> {
    const found = allTeams.find(item => item.id === id);
    return this.send({ data: found });
  }
  find(params: ?Object): Promise<{ data: Array<Team> }> {
    return this.send({ data: allTeams });
  }
}

export default TeamApi;
