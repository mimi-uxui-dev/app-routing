import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Products from "./components/Products";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Dashboard from "./components/Admin/Dashboard";
import Navbar from './components/Navbar';
import "./App.css";
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content">
          <Switch>

            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />

            <Redirect from='/msg' to='/posts' />
            <Route path="/not-found" component={NotFound} />

            <Route path="/" exact component={Home} />

            <Redirect to='/not-found' />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
