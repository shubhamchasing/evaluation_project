import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationButton from "./Buttons/NavigationButton";

import * as action from "../store/actionCreators/actionCreator";

const mapStateToProps = (state) => {
  return {
    details: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userDetails: (details) => dispatch(action.userDetails(details)),
  };
};

class SecondPage extends Component {
  state = { name: "", email: "" };

  componentDidMount() {
    this.setState({ ...this.props.details });
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSaveUserDetails = () => {
    let details = { ...this.state };

    this.props.userDetails(details);
  };
  render() {
    return (
      <div className="main">
        <div className="page-2">
          <div className="form-outer-box" >
            <div className="form-box">
              <form>
                <div className="input-wrapper">
                  <span>1</span>
                  <div className="input-box">
                    <label htmlFor="name">Tell us your name</label>
                    <input
                      onChange={(e) => this.handleName(e)}
                      value={this.state.name}
                      type="text"
                      className="name-box"
                      placeholder="Type your name here"
                      required={true}
                    />
                  </div>
                </div>
                <div className="input-wrapper">
                  <span>2</span>
                  <div className="input-box">
                    <label htmlFor="email">
                      Please enter your business Email ID
                    </label>
                    <input
                      onChange={(e) => this.handleEmail(e)}
                      value={this.state.email}
                      type="text"
                      className="email-box"
                      placeholder="name@example.com"
                      required={true}
                    />
                  </div>
                </div>
                <div className="navigation-box">
            <NavigationButton
                to={"/"}
                value={"Prev"}
                onClick={() => {
                  this.handleSaveUserDetails();
                }}
              />
              <NavigationButton
                to={"page-3"}
                value={"Next"}
                onClick={() => {
                  this.handleSaveUserDetails();
                }}
              />
            </div>
              </form>
            </div>
            
          </div>
          <div className="svg-box"></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);


// <Link to={"/"}>
//                 <button type="button">Previous</button>{" "}
//               </Link>
//               <Link to={"page-3"}>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     this.handleSaveUserDetails();
//                   }}
//                 >
//                   Next
//                 </button>{" "}
//               </Link>