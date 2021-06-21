import React, { PureComponent } from "react";
import types from "../../utils/types";

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <div>Something Went Wrong!!!</div>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: types._children,
};

export default ErrorBoundary;
