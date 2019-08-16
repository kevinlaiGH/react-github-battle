import React, { Component } from "react";
import PropTypes from "prop-types";
// passing props selected, onupdateLang to our LanguagesNav
function LangaugesNav({ selected, onUpdateLanguage }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="flex-center">
      {languages.map(language => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selected ? { color: "rgb(187, 46, 31)" } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LangaugesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
};

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    });
  }
  render() {
    const { selectedLanguage } = this.state;
    return (
      <React.Fragment>
        <LangaugesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
      </React.Fragment>
    );
  }
}

export default Popular;
