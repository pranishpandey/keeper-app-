import React from "react";

function Footer(){
  const a = new Date();
  const main = a.getFullYear();
return(
  <footer>
  <p>copyright {main}</p>
  </footer>
);

}

export default Footer;
