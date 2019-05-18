import React, { Component } from "react";
import { Error } from "./Error";

// it will return the page Error if any child had thrown an error

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidCatch = (error, info) => {
    this.setState({ error: true });
  };

  render() {
    const { error } = this.state;
    if (error) {
      return <Error />;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
