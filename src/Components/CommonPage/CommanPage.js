import React, { Component } from "react";
import Button from "../Button/Button";
import { connect } from "react-redux";

import NavigationButton from "../Button/NavigationButton";
import * as action from "../../Store/ActionCreators/actionCreator";

const mapStateToProps = (state) => {
  console.log("state", state);
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
    this.setState({ ...this.props.details });
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.details);

    if (this.props.page.id !== prevProps.page.id) {
      this.setState(
        { selected: { ...this.props.details[this.props.page.id] } },
        () => {
          console.log(this.state.selected);
        }
      );
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

  handleSaveUserDetails = () => {
    let response = {
      [this.props.page.id]: { ...this.state.selected },
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
                />
              );
            })}
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
