require('normalize.css/normalize.css');
require('styles/NavBar.css');

import React from 'react';

class NavBar extends React.Component {

  constructor(props, context) {
      super(props, context);

      this.state = {

      };

    }

  render() {
    return (
      <div>
        <nav className='nav-flex'>
          <ul className='ul-flex'>
            <li>WORK</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    );
  }
}

NavBar.defaultProps = {
};

export default NavBar;
