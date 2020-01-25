import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        {props.isShowed && <img src={logo} className="App-logo" alt="logo" />}
        <button
          className="common-btn"
          onClick={() => props.showOrHide(!props.isShowed)}
        >
          {props.isShowed ? "HIDE" : "SHOW"}
        </button>
      </header>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(App);
