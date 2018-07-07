// @flow
import React from "react";
import type { Team } from "../api/players/players-types";

const TeamPicker = (props: {
  teams: Array<Team>,
  setFieldValue: (field: string, value: any) => void,
  value: Team
}) => {
  const { teams, value, setFieldValue, ...formProps } = props;
  const onChange = e => {
    const node = e.target;
    const selectedValue = node.options[node.selectedIndex].value;
    const id = parseInt(selectedValue, 10);
    const team = teams.find(t => t.id === id);
    setFieldValue("team", team);
  };
  return (
    <select
      {...formProps}
      className="form-control"
      value={value ? value.id : ""}
      onChange={onChange}
    >
      {!value && <option value="">--- Select a team ---</option>}
      {teams.map((team: Team) => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ))}
    </select>
  );
};

TeamPicker.propTypes = {};

export default TeamPicker;
