import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import MainPage from "./container/MainPage/MainPage";
import Skills from './container/Skills/Skills';
import Footer from './components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from "./container/Contact/Contact";
import Portfolio from './container/Portfolio/Portfolio';

class App extends Component {


  render() {

      let routes = (
          <Switch>
              <Route path="/contact" component={Contact}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/skills" component={Skills}/>
              <Route path="/" exact component={MainPage}/>
              <Redirect to="/"/>
          </Switch>
      );

    return (
        <div>
            <Layout/>
            {routes}
            <Footer/>
        </div>

    );
  }
}

export default App;
