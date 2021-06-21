import React, { memo } from "react";

const Footer = memo(() => {
  return (
    <footer>
      Designed & Developed by <a href="https://jayendra.xyz">Jayendra</a>
    </footer>
  );
});

export default memo(Footer);
