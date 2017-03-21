require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import NavBar from './NavBar.js';
import Projects from './Projects.js';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  constructor(props, context) {
      super(props, context);

      this.state = {

      };

    }

  render() {
    return (
      <div className="index">
        <div className="notice">
          <NavBar />
          <h1 className='hero-text' >KYLE LANGE</h1>
        </div>
        <Projects />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
