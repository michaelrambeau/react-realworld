// @flow
import React from "react";
import { FormattedMessage } from "react-intl";

import type { Player, Team } from "../api/players/players-types";
import Alert from "./Alert";
import TeamPicker from "./TeamPicker";

const PlayerForm = (props: {
  isNewPlayer: boolean,
  teams: Array<Team>,
  values: Player,
  handleSubmit: () => void,
  handleChange: () => void,
  setFieldValue: (field: string, value: any) => void,
  isSubmitting: boolean,
  errors: Object
}) => {
  const {
    teams,
    isNewPlayer,
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    isSubmitting,
    errors
  } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>
        {isNewPlayer
          ? "This is the form to ADD a new player"
          : "This is the form to EDIT an existing player"}
      </p>
      <fieldset className="form-group">
        <label htmlFor="firstName">
          <FormattedMessage id={"fields.player.firstName"} />
        </label>
        <input
          name="firstName"
          id="firstName"
          type="text"
          onChange={handleChange}
          value={values.firstName}
          required
          className="form-control"
        />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="lastName">
          <FormattedMessage id={"fields.player.lastName"} />
        </label>
        <input
          name="lastName"
          id="lastName"
          type="text"
          onChange={handleChange}
          value={values.lastName}
          required
          className="form-control"
        />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="team">
          <FormattedMessage id={"fields.player.team"} />
        </label>
        <TeamPicker
          teams={teams}
          name={"teamId"}
          setFieldValue={setFieldValue}
          value={values.team}
          required
        />
      </fieldset>
      {errors.general && <Alert>{errors.general}</Alert>}
      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="loading" />
        ) : isNewPlayer ? (
          "Add"
        ) : (
          "Save"
        )}
      </button>
    </form>
  );
};

export default PlayerForm;
