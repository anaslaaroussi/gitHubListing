import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { CardList } from "./components/card_list/CardList";
import { API_CALL_REQUEST } from "./redux/actions";
import { Header } from "./components/header/Header";

class App extends Component {
  componentDidMount() {
    this.props.onGithubRequest();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 200) {
      this.props.onGithubRequest();
    }
  };

  render() {
    const { fetching, error, repos } = this.props;
    console.log(repos);
    return (
      <div className="App" onScroll={this.onScroll}>
        <Header />
        {repos.length ? <CardList repos={repos} /> : null}
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
