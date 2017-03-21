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
      <div>
        <h1 className="pro11">Hello World!</h1>
      </div>
    );
  }
}

Projects.defaultProps = {
};

export default Projects;
