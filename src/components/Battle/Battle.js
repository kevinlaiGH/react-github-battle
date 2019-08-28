import React from "react";
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle
} from "react-icons/fa";
import PropTypes from "prop-types";
import Results from "../Results";
import PlayerInput from "./PlayerInput";

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

function PlayerPreview({ username, onReset, label }) {
  return (
    <div className="column player">
      <h3 className="player-label">{label}</h3>
      <div className="row bg-light">
        <div className="player-info">
          <img
            className="avatar-small"
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`} className="link">
            {username}
          </a>
        </div>
        <button className="btn-clear flex-center" onClick={onReset}>
          <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
        </button>
      </div>
    </div>
  );
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player
    });
  }

  handleReset(id) {
    this.setState({
      [id]: null
    });
  }

  render() {
    const { playerOne, playerTwo, battle } = this.state;

    if (battle === true) {
      return <Results playerOne={playerOne} playerTwo={playerTwo} />;
    }
    return (
      <React.Fragment>
        <Instructions />
        <div className="players-container">
          <h1 className="center-text header-lg">Players</h1>
          <div classNAME="row space-around">
            {playerOne == null ? (
              <PlayerInput
                label="Player One"
                onSubmit={player => this.handleSubmit("playerOne", player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label="Player One"
                onReset={() => {
                  this.handleReset("playerOne");
                }}
              />
            )}
            {playerTwo == null ? (
              <PlayerInput
                label="Player Two"
                onSubmit={player => this.handleSubmit("playerTwo", player)}
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label="Player Two"
                onReset={() => {
                  this.handleReset("playerTwo");
                }}
              />
            )}
          </div>

          {/* this.setState cause re-render of UI, if battle: true, we render <Result playerOne={playerOne} playerTwo={playerTwo} /> */}
          {playerOne && playerTwo && (
            <button
              className="btn dark-btn btn-space"
              onClick={() => this.setState({ battle: true })}
            >
              Battle
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}
