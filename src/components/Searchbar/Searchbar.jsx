import React, { Component } from "react";

import classes from "./Searchbar.module.css";

class Searchbar extends Component {
  render() {
    return (
      <header className={classes.searchbar}>
        <form className={classes.form}>
          <button type="submit" className={classes.button}>
            <span className={classes["button-label"]}>buscar</span>
          </button>

          <input
            className={classes.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
