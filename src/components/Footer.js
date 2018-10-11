import React, { Component } from "react";

class Footer extends Component {
  render() {
    const datum = new Date();
    const ime = "Milan";
    // ovde moze cist javascript, dole moze samo podskup
    // dole bi mogli izrazi, ne bi mogle naredbe
    return (
      <footer>
        <p>Zdravo korisnice: {ime}</p>
        Made by: Skola koda <br />
        {datum.toLocaleDateString()}
      </footer>
    );
  }
}

export default Footer;
