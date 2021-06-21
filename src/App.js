import React from "react";
import ErrorBoundary from "./components/error/ErrorBoundary";

import Okr from "./container/okr/Okr";

import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <header />
      <ErrorBoundary>
        <Okr />
      </ErrorBoundary>
      <footer />
    </div>
  );
}

export default App;
