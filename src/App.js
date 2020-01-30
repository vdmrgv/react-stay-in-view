import React from "react";
import logo from "./logo.svg";
import logoRedux from "./logo-redux.svg";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={props.isShowed ? logo : logoRedux} className="App-logo" alt="logo" />
        <button
          className="App-button"
          onClick={() => props.showOrHide(!props.isShowed)}
        >
          {props.isShowed ? "REDUX" : "REACT"}
        </button>
      </header>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(App);
