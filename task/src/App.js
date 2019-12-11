import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./components/postslist.js";
import Details from "./components/postdetails.js";
import PostForm from "./components/addpost.js";

class App extends Component {

  render() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={PostList} exact />
          <Route path="/addpost" component={PostForm} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
