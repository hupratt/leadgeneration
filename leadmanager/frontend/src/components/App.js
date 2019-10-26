import React, { Fragment, Component } from "react";
import Header from "./display/Header";
import Dashboard from "./leads/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Dashboard />
        </Fragment>
      </Provider>
    );
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(<App />, document.getElementById("root"));
