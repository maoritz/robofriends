import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hadError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  s;
  render() {
    if (this.state.hadError) {
      return <h1>Oooops, That is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
