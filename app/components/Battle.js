import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import PropTypes from "prop-types";

function Instructions() {
  return (
    <div className="instructions-container">
      <h1 className="header-lg center-text">Instructions</h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h4 className="header-sm">Enter two Github users</h4>
          <FaUserFriends
            className="bg-light"
            color="rgb(255, 191, 116)"
            size={150}
          />
        </li>
        <li>
          <h4 className="header-sm">Battle</h4>
          <FaFighterJet className="bg-light" color="#727272" size={150} />
        </li>
        <li>
          <h4 className="header-sm">See the winner</h4>
          <FaTrophy className="bg-light" color="rgb(255, 215, 0)" size={150} />
        </li>
      </ol>
    </div>
  );
}

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  }
  // username is gonna be whatever the user type in the field
  // this.setState causes a re-render which then updates the VALUE of the input field
  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  render() {
    return (
      <form className="column-player" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">
          {this.props.label}
        </label>
        <div className="row player-inputs">
          <input
            type="text"
            id="username"
            className="input-light"
            placeholder="github username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className="btn dark-btn"
            type="submit"
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
        <PlayerInput label="Label!" onSubmit={value => console.log(value)} />
      </React.Fragment>
    );
  }
}
