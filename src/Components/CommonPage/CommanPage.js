import React, { Component } from "react";
import Button from "../Buttons/Button";
import { connect } from "react-redux";

import NavigationButton from "../Buttons/NavigationButton";
import * as action from "../../store/actionCreators/actionCreator";
//import * as api from "../Api/api";

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

class CommanPage extends Component {
  state = { selected: {} };

  componentDidMount() {
    // console.log(this.props.details[this.props.page.id]);
    this.setState({ selected: { ...this.props.details[this.props.page.id] } });
  }

  componentDidUpdate(prevProps) {
    //console.log(this.props.details);

    if (this.props.page.id !== prevProps.page.id) {
      this.setState({
        selected: { ...this.props.details[this.props.page.id] },
      });
    }
  }

  handleOnClick = (e, option) => {
    let value = e.currentTarget.value;

    let options = this.props.page.options;

    if (options.length <= 3) {
      this.setState({ selected: { ...option } });
    } else {
      if (this.state.selected[value]) {
        const { [value]: remove, ...filteredOptions } = this.state.selected;

        this.setState({ selected: filteredOptions });
      } else {
        this.setState({ selected: { ...this.state.selected, ...option } });
      }
    }
  };

  handleCheck = () => {
    if (Object.keys(this.state.selected).length > 0) {
      return false;
    } else {
      return true;
    }
  };

  handleSaveUserDetails = (e) => {
    //console.log(e.target)
    let response = {
      [this.props.page.id]: { ...this.state.selected },
    };
    this.props.responses(response);
    //this.setState({ selected: {} });
    // if (e.target.value === "Next" && this.props.page.id === 8) {
    //   // console.log(this.props.details)
    //   api.formSubmit(this.props.details);
    // }
  };

  render() {
    const { question, options, id } = this.props.page;
    const selectedOption = Object.keys(this.state.selected);
    //console.log(selectedOption)
    // console.log(this.state.selected);
    return (
      <div className="main">
        <div className="questions-page">
          <div className="question">
            <span>{id}</span>
            <p>{question} </p>
          </div>
          <div className="btn-box">
            {options.map((each, index) => {
              let alphabet = String.fromCharCode(65 + index);
              let option = { [alphabet]: each };

              return (
                <Button
                  onClick={(e) => {
                    this.handleOnClick(e, option);
                  }}
                  value={alphabet}
                  text={each}
                  key={index}
                  type="button"
                  selected={selectedOption.includes(alphabet)}
                />
              );
            })}
            <p>Add choice</p>
            <div className="navigation-box">
              <NavigationButton
                to={"page-" + (id - 1)}
                value={"Prev"}
                onClick={(e) => {
                  this.handleSaveUserDetails(e);
                }}
                isDisabled = {false}
              />
              <NavigationButton
                to={ "page-" + (id + 1)}
                value={"Next"}
                onClick={(e) => {
                  this.handleSaveUserDetails(e);  
                }}
                isDisabled = {this.handleCheck()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommanPage);

// [...Object.values(this.state.selected)]

// <Link
//                 to={"page-" + (id - 1)}
//                 onClick={() => {
//                   this.handleSaveUserDetails();
//                 }}
//               >
//                 <button type="button">Previous</button>{" "}
//               </Link>
//               <Link to={"page-" + (id + 1)}>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     this.handleSaveUserDetails();
//                   }}
//                 >
//                   Next
//                 </button>{" "}
//               </Link>
