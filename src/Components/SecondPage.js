import React, { Component } from "react";

class SecondPage extends Component {
  state = { name: "", email: "" };
  
  

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div className="main">
        <div className="page-2">
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
            </form>
          </div>
          <div className="svg-box"></div>
        </div>
      </div>
    );
  }
}

export default SecondPage;
