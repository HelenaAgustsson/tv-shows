import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { TVList, TVDetails } from './tv-shows';
import { pool } from './mysql-pool';

class Menu extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/" activeStyle={{ color: 'darkblue' }}>
          TV App
        </NavLink>
        {' ' /* Add extra space between menu items */}
        <NavLink to="/students" activeStyle={{ color: 'darkblue' }}>
          TV Shows
        </NavLink>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h4>Welcome to TV Shows rating centre</h4>
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/students" component={TVList} />
      <Route exact path="/students/:id" component={TVDetails} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
