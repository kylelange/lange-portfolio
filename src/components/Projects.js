require('normalize.css/normalize.css');
require('styles/Projects.css');

import React from 'react';

class Projects extends React.Component {

  constructor(props, context) {
      super(props, context);

      this.state = {

      };

    }

  render() {
    return (
      <div className="project-flex">
        <div className="text-box">
          <h2>Lumen Learning: TEACHER TOOLS</h2>
          <a src='#' ><h3>Case Study</h3></a>
          <a src='#' ><h3>See the code</h3></a>
          <p>Lumen Learning makes open source college coursework to help students learn more effectively.  I made a settings menu that made it easier for instructors to reach their students.</p>
          <h6></h6>
        </div>
        <img src="images/settings-window.jpg" alt="a settings page" className="screenshot"></img>
      </div>
    );
  }
}

Projects.defaultProps = {
};

export default Projects;
