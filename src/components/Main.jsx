require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import NavBar from './NavBar.jsx';
import Projects from './Projects.jsx';
import AboutMe from './AboutMe.jsx';

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
          <img src="images/portfolio-logo.png" alt="a logo of my name: Kyle Lange" className="logo-img"></img>
        </div>
        <a name="workNav" ><Projects /></a>
        <a name="aboutNav"><AboutMe /></a>
      </div>
    );
  }

  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }

}

AppComponent.defaultProps = {
};

export default AppComponent;
