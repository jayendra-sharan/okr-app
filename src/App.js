import React, { memo } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Okr from "./container/okr/Okr";
import ErrorBoundary from "./components/error/ErrorBoundary";

import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <ErrorBoundary>
        <Okr />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default memo(App);
