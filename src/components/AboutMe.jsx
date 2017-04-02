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
      <div>
        <h1 className="test-h1">Hello World!</h1>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
