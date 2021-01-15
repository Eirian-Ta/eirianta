import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"

import { ApolloProvider } from 'react-apollo';

import apolloClient from './config/createApolloClient';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faDoorClosed, faDoorOpen, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubAlt, faRocketchat } from '@fortawesome/free-brands-svg-icons';
library.add(faDoorClosed, faDoorOpen,  faEnvelope, faLinkedinIn, faGithubAlt, faBars, faTimes, faRocketchat);

import { Homepage } from './modules';
import { Contact } from './modules';
import { Projs } from './modules';

function App () {

    return (
      <ApolloProvider client={apolloClient}>
        <Router>
          <Route
            render={({ location }) => {
              return (

                <TransitionGroup component={null}>
                  <CSSTransition
                    key={location.key}
                    timeout={{enter:300, exit:300}}
                    classNames="page"
                   >
                 <Switch location={location}>
                    <Route path="/" exact component = {Homepage} />
                    <Route path="/portfolio" component = {Projs} />
                    <Route path="/contact" component = {Contact} />
                    <Route path="/projs" component = {Homepage} />
                 </Switch>
            </CSSTransition>
           </TransitionGroup>



                );

            }}
         
            />
        </Router>
      </ApolloProvider>
    )
  }


export default App;
