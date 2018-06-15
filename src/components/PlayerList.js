import React from "react";
import { Link } from "react-router-dom";

const PlayerList = ({ players, locale = "en" }) => {
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

PlayerList.Row = ({ player, locale }) => {
  return (
    <tr>
      <td>{player.id}</td>
      <td>
        <Link to={`/${locale}/players/${player.id}`}>{player.name}</Link>
      </td>
      <td>{player.team}</td>
    </tr>
  );
};

export default PlayerList;
