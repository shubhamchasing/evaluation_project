import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style.css";

import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import CommanPage from "./Components/CommonPage/CommanPage";
import RatingPage from "./Components/RatingPage";
import {
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
} from "./Questions/Questions";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route path="/page-2" component={SecondPage} />
          <Route path="/page-3">
            <RatingPage page={page3} />
          </Route>
          <Route path="/page-4">
            <CommanPage page={page4} />
          </Route>
          <Route path="/page-5">
            <CommanPage page={page5} />
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
            <CommanPage page={page9} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

// {Object.keys(pages).map((page, index) => {
//   console.log(pages[page])
//   return (
//     <Route path={"/page-" + index + 3}>
//       <CommanPage key={pages[page].id} page={pages[page]} />{" "}
//     </Route>
//   );
// })}
