import React, { Component } from "react";

import { connect } from "react-redux";
import RatingButton from "./Buttons/RatingButton";
import NavigationButton from "./Buttons/NavigationButton";
import * as action from "../store/actionCreators/actionCreator";

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
    //console.log(this.props.details.rating)
    this.setState({ rating: this.props.details.rating });
    window.addEventListener('beforeunload', this.onUnload);

  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload);
}


onUnload = () =>{
  console.log(this.props.history)
  this.props.history.push('/')
}
onUnload = () =>{
  this.props.history.push('/')
}

  handleOnClick = (e) => {
    let value = e.currentTarget.value;
    this.setState({ rating: value });
  };

  handleCheck = () => {
   // console.log(this.state);
    if (this.state.rating !== undefined) {
      return false;
    } else {
      return true;
    }
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
    const selectedOption = this.state.rating;
    //console.log(this.state.rating);
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
                  <RatingButton
                    onClick={(e) => {
                      this.handleOnClick(e);
                    }}
                    value={each}
                    key={index}
                    selected={selectedOption === each}
                    type="button"
                  />
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
                isDisabled={false}
              />
              <NavigationButton
                to={"page-" + (id + 1)}
                value={"Next"}
                onClick={() => {
                  this.handleSaveUserDetails();
                }}
                isDisabled={this.handleCheck()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingPage);
