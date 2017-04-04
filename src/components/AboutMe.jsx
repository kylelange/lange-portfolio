require('normalize.css/normalize.css');
require('styles/AboutMe.css');

import React from 'react';

class AppComponent extends React.Component {

  constructor(props, context) {
      super(props, context);

      this.state = {

      };

    }

  render() {
    return (
      <div className="aboutme">
        <div className="aboutme-col1">
          <h1 className="aboutme-title">ABOUT ME:</h1>
          <p>To my core, I am a person who seeks ways to guide others and myself towards growth in learning.  I love web development because I enjoy taking big ideas and finding a way to symbolize them visually, interactively, and creatively. I also am passionate about open-source work and its effect for social justice and educational opportunities.</p>
          <h6>Code: React.js, HTML5, CSS3 w/Sass, vanilla ES6 JavaScript, jQuery, and a dabbler in Angular JS and TypeScript.  Willing to learn any and all languages (I learned te basics of React.js in three weeks.) </h6>
        </div>
        <div className="aboutme-col2">
          <h2 className="aboutme-title">CONTACT ME:</h2>
          <p class className="aboutme-email"><a href="mailto:baronsintrees@gmail.com"> baronsintrees@gmail.com</a></p>
          <img src="images/github-logo.png" alt="a logo of my github repositories" className="aboutme-logo"></img>
          <img src="images/linkedin-logo.png" alt="a logo of m linkedIn account" className="aboutme-logo"></img>
          <img src="images/resume-logo.png" alt="a logo of my design: representing a " className="aboutme-logo"></img>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
