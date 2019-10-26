import React, { Fragment } from "react";
import Header from "./display/Header";
import Dashboard from "./leads/Dashboard";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    </Provider>
  );
}

export default App;
