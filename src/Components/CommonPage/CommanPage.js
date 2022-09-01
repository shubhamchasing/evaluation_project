import React, { Component } from "react";
import Button from "../Button/Button";

class CommanPage extends Component {
  state = { selected : [] };
  
  handleOnClick = (e) =>{
    let value = e.currentTarget.value
    if(!this.state.selected.includes(value)){
      this.setState({})
    }
    

  }

  render() {
    const { question, options, id } = this.props.page;
    return (
      <div className="main">
        <div className="questions-page">
          <div className="question">
            <span>{id}</span>
            <p>{question} </p>
          </div>
          <div className="btn-box">
            {options.map((each, index) => {
             // console.log(each)
              return (
                
                <Button
                  onClick = {(e) => {this.handleOnClick(e)}}
                  value = {each}
                  key={index}
                  option={String.fromCharCode(65 + index)}
                  text={each}
                  type = "button"
                />
              );
            })}
            <p>Add choice</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CommanPage;
