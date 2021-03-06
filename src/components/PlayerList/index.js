// @flow
import React from "react";
import { Link } from "react-router-dom";
import type { Player } from "../../api/players/players-types";

type Props = {
  players: Array<Player>,
  locale: string
};

const PlayerList = (props: Props) => {
  const { players, locale = "en" } = props;
  return (
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Team</td>
        </tr>
      </thead>
      <tbody>
        {players.map(player => (
          <PlayerList.Row key={player.id} player={player} locale={locale} />
        ))}
      </tbody>
    </table>
  );
};

PlayerList.Row = (props: { player: Player, locale: string }) => {
  const { player, locale } = props;
  return (
    <tr>
      <td>{player.id}</td>
      <td>
        <Link to={`/${locale}/players/${player.id}`}>
          {player.firstName} {player.lastName}
        </Link>
      </td>
      <td>{player.team.name}</td>
    </tr>
  );
};

export default PlayerList;
