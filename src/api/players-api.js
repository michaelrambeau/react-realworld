/**
 * API mock
 */
import data from "./players.json";
import { randomDelay, delayError } from "./utils";

const createApi = ({ immediate = true } = {}) => {
  // it's the first time I use `let`, usually it's bad!
  let players = data.slice();
  const findById = id => {
    const number = parseInt(id, 10);
    return players.find(player => player.id === number);
  };
  const send = immediate ? Promise.resolve.bind(Promise) : randomDelay;
  return {
    add(player) {
      // Caution: it's not good to use `push` method because it mutates array!
      // but here we are mocking a distant API so it's OK.
      players.push({
        ...player,
        id: Math.max(...players.map(item => item.id)) + 1
      });
      return send(players);
    },
    edit(data) {
      const { id } = data;
      players = players.map(
        player => (id === player.id ? { ...player, ...data } : player)
      );
      return send(players);
    },
    findById(id) {
      return send(findById(id));
    },
    findAll() {
      return send(players);
    },
    count() {
      return send(players.length);
    }
  };
};

export default createApi;
