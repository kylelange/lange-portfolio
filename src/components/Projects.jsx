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
          <img src="images/settings-window.jpg" alt="a settings page" className="screenshot-mobile-appear"></img>
          <div className="flex-default">
            <a href='https://github.com/kylelange/teacher-tools' ><h3>CASE STUDY</h3></a>
            <h3>|</h3>
            <a href='https://github.com/kylelange/teacher-tools' ><h3>SEE THE CODE</h3></a>
          </div>
          <p>Lumen Learning makes open source college coursework to help students learn more effectively.  I made a settings menu that made it easier for instructors to reach their students.</p>
          <h6>React.js, CSS3, PostgreSQL, Sketch3, HTML5, UX Research</h6>
        </div>
        <img src="images/settings-window.jpg" alt="a settings page" className="screenshot"></img>
      </div>
    );
  }
}

Projects.defaultProps = {
};

export default Projects;
