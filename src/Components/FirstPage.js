import React, { Component } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../data/icons/search.svg";

class FirstPage extends Component {
  state = {};

  keyPressHandler = (e) => {
    if (e.which === 13) {
      this.props.history.push("page-2");
    }
  };

  render() {
    return (
      <div
        className="main"
        tabIndex={0}
        onKeyDown={(e) => {
          this.keyPressHandler(e);
        }}
      >
        <div className="page-1">
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Grade Your Search!"
              required={true}
            />

            <img className="search-icon" alt="search" src={searchIcon} />
          </div>
          <div className="button-box">
            <Link to={"page-2"}>
              <button type="button" className="start-button">
                START
              </button>
            </Link>
            <span>Press ENTER</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
