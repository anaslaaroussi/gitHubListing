import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { CardList } from "./components/card_list/CardList";
import { API_CALL_REQUEST } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    this.props.onGithubRequest();
  }

  render() {
    console.log(this.props);
    const { fetching, error, repos } = this.props;

    return (
      <div className="App">
        <CardList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    repos: state.repos,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGithubRequest: () => dispatch({ type: API_CALL_REQUEST })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
