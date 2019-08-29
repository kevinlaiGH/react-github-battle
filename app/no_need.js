import React from "react";
import "./index.css";
import { Route, Link, Switch } from "react-router-dom";
import Popular from "./components/Popular";
import Battle from "./components/Battle/Battle";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Link to="/popular">Popular</Link>
        <Link to="/battle">Battle</Link>
        <Switch>
          <Route path="/popular" component={Popular} />
          <Route
            path="/battle"
            render={() => (
              <div>
                <h2>BATTLE</h2>
                <Battle />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}
