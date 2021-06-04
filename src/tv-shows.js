import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { pool } from './mysql-pool';

export class TVList extends Component {
  render() {
    return (
      <div>
        <h4>TV Shows:</h4>
      </div>
    );
  }
}

export class TVDetails extends Component {
  render() {
    return <div></div>;
  }
}
