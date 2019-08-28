import React from "react";
import PropTypes from "prop-types";

import { searchProfiles } from "../../utils/api";

function noWhiteSpace(value) {
  return value.split(" ").length === 1;
}

function validate(value) {
  if (value.length > 3) {
    return true;
  } else {
    return false;
  }
}

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: false,
      items: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("hi");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  }
  handleSelect(login) {
    this.setState({ items: [] });
    this.props.onSubmit(login);
  }
  // username is gonna be whatever the user type in the field
  // this.setState causes a re-render which then updates the VALUE of the input field
  handleChange(event) {
    const {
      target: { value, name }
    } = event;

    // longer than 3.
    // no spaces.
    // dont search unless previous results have returned

    if (!this.state.isLoading && validate(value) && noWhiteSpace(value)) {
      this.setState({ isLoading: true });
      searchProfiles(value).then(data => {
        console.log("here", { value, name }, data);
        this.setState({
          isLoading: false,
          items: data.items ? data.items.map(({ login }) => login) : []
        });
        // get the items and console log the usernames from it.
      });
    }

    this.setState({
      username: value
    });
  }
  render() {
    return (
      <form className="column-player" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">
          {this.props.label}
        </label>
        <div className="row player-inputs">
          <div style={{ position: "relative", width: "50%" }}>
            <input
              autocomplete="off"
              type="text"
              id="username"
              className="input-light"
              placeholder="github username"
              value={this.state.username}
              onChange={this.handleChange}
              style={{
                width: "100%"
              }}
            />
            {this.state.items.length !== 0 && (
              <div
                style={{
                  position: "absolute",
                  top: 4 + 22 + 8 * 2,
                  backgroundColor: "white",
                  left: 0,
                  border: "1px solid black",
                  width: "100%",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}
              >
                {this.state.items.map(login => (
                  <option
                    key={login}
                    value="login"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.handleSelect(login)}
                  >
                    {login}
                  </option>
                ))}
              </div>
            )}
          </div>
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
export default PlayerInput;
