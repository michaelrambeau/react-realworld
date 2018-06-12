import React from "react";
import Alert from "./Alert";

const PlayerForm = ({
  isNewPlayer,
  values,
  handleSubmit,
  handleChange,
  isSubmitting,
  errors
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>
        {isNewPlayer
          ? "This is the form to ADD a new player"
          : "This is the form to EDIT an existing player"}
      </p>
      <fieldset className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          id="name"
          type="text"
          onChange={handleChange}
          value={values.name}
          required
          className="form-control"
        />
        <label htmlFor="team">Team:</label>
        <input
          name="team"
          id="team"
          type="text"
          onChange={handleChange}
          value={values.team}
          required
          className="form-control"
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
