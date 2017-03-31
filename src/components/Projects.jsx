require('normalize.css/normalize.css');
require('styles/Projects.css');

import React from 'react';

class Projects extends React.Component {

  constructor(props, context) {
      super(props, context);

      this.state = {
        lumenToggle: false,
        physioToggle: false
      };
      this.toggleLumen = this.toggleLumen.bind(this);
      this.togglePhysio = this.togglePhysio.bind(this);
  }

  render() {
{/* toggleTest style changes*/}
    const tileOn = {
      transition: 'visibility .5s, opacity .5s ease-in-out',
      visibility: 'visable',
      opacity: '1',
      position: 'absolute',
      top: '39.25rem',
      left: '0',
      backgroundColor: '#222'
    };
    const tileOff = {
      transition: 'opacity .5s ease-in-out, margin-top 0s .6s',
      opacity: '0',
      position: 'absolute',
      top: '39.25rem',
      left: '0',
      backgroundColor: '#222',
      marginTop: '-10000px'
    }
    return (
      <div>
  {/*PhysioPDX/TEACHER TOOLS: Closed Pair*/}
        <div className="project-flex-tile">
          <img onClick={this.toggleLumen} src="images/settings-window.jpg" alt="a settings page" className="tile-image"></img>
          <img onClick={this.togglePhysio} src="images/physio-splash.jpg" alt="the splash photo of a physical therapy website. In it, two people are holding hands." className="tile-image"></img>
        </div>
  {/*TEACHER TOOLS: OPEN tile*/}
        <div style={this.state.lumenToggle ? tileOn : tileOff}>
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
            <img src="images/Xout-portfolio.png" alt="an X to close the modal window" onClick={this.toggleLumen} className="x-out"></img>
          </div>
        </div>
  {/*PhysioPDX: OPEN tile*/}
        <div style={this.state.physioToggle ? tileOn : tileOff}>
          <div className="project-flex">
            <img src="images/physio-splash.jpg" alt="the splash photo of a physical therapy website. In it, two people are holding hands." className="screenshot"></img>
            <img src="images/Xout-portfolio.png" alt="an X to close the modal window" onClick={this.togglePhysio} className="x-out"></img>
            <div className="text-box">
              <h2>PhysioPDX: Design/ Implementation</h2>
              <img src="images/physio-splash.jpg" alt="the splash photo of a physical therapy website. In it, two people are holding hands." className="screenshot-mobile-appear"></img>
              <div className="flex-default">
                <a href='https://github.com/kylelange/physio-pdx' ><h3>CASE STUDY</h3></a>
                <h3>|</h3>
                <a href='https://github.com/kylelange/physio-pdx' ><h3>SEE THE CODE</h3></a>
              </div>
              <p>PhysioPDX is a brick and mortar small business focused on physical healing. They needed a simple site to start a conversation with prosepctive clients and begin to answer the questions they have about their care.</p>
              <h6>HTML5, CSS3, JQuery/JavaScript, Sketch3, UI design</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // toggleTile() {
  //   if()
  //   {
  //     this.setState({
  //       physioToggle: !this.state.physioToggle
  //     });
  //   } else if ()
  //   {
  //     this.setState({
  //       lumenToggle: !this.state.lumenToggle
  //     });
  //   }
  // }

  toggleLumen() {
    this.setState({
      lumenToggle: !this.state.lumenToggle
    });
  }

  togglePhysio() {
    this.setState({
      physioToggle: !this.state.physioToggle
    });
  }

}

Projects.defaultProps = {
};

export default Projects;
