import React, { Component } from "react";
import { connect } from "react-redux";

import * as api from "./Api/api";

import searchIcon from "./search.svg";

const mapStateToProps = (state) => {
  //console.log("state", state);
  return {
    details: state.data,
  };
};

class SubmitPage extends Component {
  state = { details: {}, results: "" };

  componentDidMount() {
    api.formSubmit(this.props.details).then((res) => {
      this.setState({ results: res.results });
    });
    this.setState({ details: this.props.details });
  }


  render() {
    console.log(this.state.results)
    const results =  parseInt(this.state.results)
    if(this.state.results.length > 0){return (
      <div className="main">
        <div className="page-9">
          <div className="search-box search-box-submit-page">
            <input
              type="text"
              className="search-bar"
              placeholder="Grade Your Search!"
              required={true}
            />

            <img className="search-icon" alt="search" src={searchIcon} />
          </div>
          <div className="report-name">
            Report for {this.state.details.name}
          </div>
          <svg
            width="220"
            height="220"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            className="circular-chart"
          >
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#144340" />
              <stop offset="100%" stopColor="#29847F" />
            </linearGradient>
            <path
              className="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray= {`${results}, 100`}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
              {results + "%"}
            </text>
          </svg>

          <div className="report-des">
            A detailed report will be sent to your mail shortly!
          </div>
        </div>
      </div>
    );}
  }
}

export default connect(mapStateToProps)(SubmitPage);
