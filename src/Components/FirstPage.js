import React, { Component } from "react";
import { Link } from "react-router-dom";

class FirstPage extends Component {
  state = {};

  keyPressHandler = (e) => {
    if (e.which === 13) {
      this.props.history.push("page-2");
    }
  };

  render() {
    return (
      <div className="main">
        <div className="page-1">
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Grade Your Search!"
              required={true}
            />

            <img
              className="search-icon"
              alt="search"
              src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
            />
          </div>
          <div className="button-box">
            <Link to={"page-2"}>
              <button type="button" className="start-button">
                START
              </button>
            </Link>
            <span
              tabIndex={0}
              onKeyDown={(e) => {
                this.keyPressHandler(e);
              }}
            >
              Press ENTER
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
