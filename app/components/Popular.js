import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api.js";
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
      selectedLanguage: "All",
      repos: null,
      error: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }
  // changing selected language
  componentDidMount() {
    this.updateLanguage(this.state.selectLanguage);
  }
  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      repos: null,
      error: null
    });
    fetchPopularRepos(selectedLanguage)
      .then(repos => this.setState({ repos, errors: null }))
      .catch(() => {
        console.warn("Error fetching repos: ", error);
        this.setState({
          error: `there was an error fetching the repositories`
        });
      });
  }
  isLoading() {
    return this.state.repos === null && this.state.error == null;
  }
  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <React.Fragment>
        <LangaugesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {/* show them loading page if the repos (line 35, 48,52, 61)  and error is falsy (NULL)*/}
        {this.isLoading() && <p>LOADING</p>}
        {/* show them error is truthy (NOT NULL) and error message (line 36,49,56) */}
        {error && <p>{error}</p>}

        {repos && <p>{JSON.stringify(repos, null, 2)}</p>}
      </React.Fragment>
    );
  }
}

export default Popular;
