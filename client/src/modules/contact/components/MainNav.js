import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeSVG from '../../shared/HomeSVG'
import PortfolioSVG from '../../shared/PortfolioSVG'
import ResumeSVG from '../../shared/ResumeSVG'


class MainNav extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    // this._onMouseOver = this._onMouseOver.bind(this);
    // this._onMouseOut = this._onMouseOut.bind(this);
    this.state = {
      "hamburgerMenuIcon": "close",
      "marginTopNav": "-50vh",
      "navHeight": 0,
    }
  }

_handleClick(e) {
    console.log('clicked')
    var transform = (this.state.hamburgerMenuIcon === "open") ? "close" : "open";
    var newMarginTop = (this.state.marginTopNav === 0) ? "-50vh" : 0;
    var newHeight = (this.state.navHeight === 0) ? "100vh" : 0;
    this.setState({"hamburgerMenuIcon": transform, "marginTopNav": newMarginTop, "navHeight": newHeight});
  }

  //   _onMouseOver(e) {
  //   this.setState({ icon: "door-open" });
  // }

  // _onMouseOut(e) {
  //   this.setState({ icon: "door-closed" });
  // }

   componentDidMount() {
    document.getElementById('toggle-nav').addEventListener("onclick", this._handleClick);
    // document.getElementById('homepage-icon-btn').addEventListener("mouseover", this._onMouseOver);
    // document.getElementById('homepage-icon-btn').addEventListener("mouseleft", this._onMouseOut);
  }


  render() {

    let navPaneVisibility = {
      marginTop: this.state.marginTopNav,
      height: this.state.navHeight
    }

    return (
      <div id="main-nav">
        <div id="toggle-nav" onClick={this._handleClick}>
          <div className={"stick stick-1 " + this.state.hamburgerMenuIcon}></div>
          <div className={"stick stick-2 " + this.state.hamburgerMenuIcon}></div>
          <div className={"stick stick-3 " + this.state.hamburgerMenuIcon}></div>
        </div>
        <Container className="nav-pane" style={navPaneVisibility}>
          <Col className="col-h" onClick={this._handleClick}>
            <Link to="/">
              <HomeSVG />
              <div className="collision">Home</div>
            </Link>
          </Col>
          <Col className="col-c" onClick={this._handleClick}>
            <Link to="/portfolio">
              <PortfolioSVG />
              <div className="collision">Portfolio</div>
            </Link>            
          </Col>
          <Col className="col-r" onClick={this._handleClick}>
            <Link to="/about">
              <ResumeSVG />
              <div className="collision">Resume</div>
            </Link>
          </Col>
            
        </Container>
     </div>  
      

    )
  }
}

  
export default MainNav