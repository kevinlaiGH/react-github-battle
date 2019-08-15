import React, { Component } from "react";

class Popular extends Component {
  render() {
    const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="flex-center">
        {languages.map(lang => (
          <li key={lang}>
            <button className="btn-clear nav-link">{lang}</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Popular;
