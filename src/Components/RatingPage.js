import React, { Component } from "react";

import { connect } from "react-redux";

import NavigationButton from "./Button/NavigationButton";
import * as action from "../Store/ActionCreators/actionCreator";

const mapStateToProps = (state) => {
  //console.log("state", state);
  return {
    details: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    responses: (response) => dispatch(action.responses(response)),
  };
};

class RatingPage extends Component {
  state = { rating: "" };

  componentDidMount() {
    this.setState({ ...this.props.details });
  }

  handleOnClick = (e) => {
    let value = e.currentTarget.value;
    this.setState({ rating: value });
  };

  handleSaveUserDetails = () => {
    let response = {
      ...this.state,
    };

    this.props.responses(response);
    //this.setState({ selected: {} });
  };

  render() {
    const { question, options, id } = this.props.page;
    // console.log(this.state.selected);
    return (
      <div className="main">
        <div className="questions-page">
          <div className="question">
            <span>{id}</span>
            <p>{question} </p>
          </div>
          <div className="btn-box">
          <div className="btn-rating-box">
            {options.map((each, index) => {
              return (
                <button className="btn-rating"
                  onClick={(e) => {
                    this.handleOnClick(e);
                  }}
                  value={each}
                  key={index}
                  type="button"
                >{each}</button>
              );
            })}
            </div>
            <p>Add choice</p>
            <div className="navigation-box">
              <NavigationButton
                to={"page-" + (id - 1)}
                value={"Prev"}
                onClick={() => {
                  this.handleSaveUserDetails();
                }}
              />
              <NavigationButton
                to={"page-" + (id + 1)}
                value={"Next"}
                onClick={() => {
                  this.handleSaveUserDetails();
                }}
              />
            
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingPage);
