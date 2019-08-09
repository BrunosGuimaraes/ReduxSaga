import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./pages/login";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}
