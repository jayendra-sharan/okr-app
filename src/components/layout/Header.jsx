import React, { memo } from "react";

const Header = memo(() => {
  return (
    <header>
      <h1>OKR | ally.io</h1>
    </header>
  );
});

export default memo(Header);
