import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./style.css";

import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import CommanPage from "./Components/CommonPage/CommanPage";
import RatingPage from "./Components/RatingPage";
import SubmitPage from "./Components/SubmitPage";
import {
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
} from "./data/questions/questions";

class App extends Component {
  state = {};

  renderBasedOnLocation = () => {
    if (this.props.details[3] && Object.hasOwn(this.props.details[3], "B")) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route path="/page-2" component={SecondPage} />
          <Route path="/page-3">
            <CommanPage page={page3} />
          </Route>
          <Route path="/page-4">
            <RatingPage page={page4} />
          </Route>
          <Route path="/page-5">
            <CommanPage
              page={this.renderBasedOnLocation() ? page5[0] : page5[1]}
            />
          </Route>
          <Route path="/page-6">
            <CommanPage page={page6} />
          </Route>
          <Route path="/page-7">
            <CommanPage page={page7} />
          </Route>
          <Route path="/page-8">
            <CommanPage page={page8} />
          </Route>
          <Route path="/page-9">
            <SubmitPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log("state", state);
  return {
    details: state.data,
  };
};

export default connect(mapStateToProps)(App);

// {Object.keys(pages).map((page, index) => {
//   console.log(pages[page])
//   return (
//     <Route path={"/page-" + index + 3}>
//       <CommanPage key={pages[page].id} page={pages[page]} />{" "}
//     </Route>
//   );
// })}
