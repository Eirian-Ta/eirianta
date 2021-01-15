import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class NextPageBtn extends Component {
  constructor(props) {
    super(props);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
    this.state = {
      "nxtPgBtn": "",
      "nxtPgTitle": "hidden",
      "titleOpacity": 0,
    }
  }

/* Tracking Mouse Movement */

  _onMouseOver(e) {
    this.setState({ "nxtPgBtn": "active", "nxtPgTitle": "visible", "titleOpacity": 1 });
  }

  _onMouseOut(e) {
    this.setState({ "nxtPgBtn": "", "nxtPgTitle": "hidden", "titleOpacity": 0  });
  }



  /**
   * Add event listener
   */

  componentDidMount() {
    document.getElementById('nxt-pg').addEventListener("mouseover", this._onMouseOver);
    document.getElementById('nxt-pg').addEventListener("mouseleft", this._onMouseOut);
  }


  render() {

    let nxtPgTitleVisibility = {
      visibility: this.state.nxtPgTitle,
      opacity: this.state.titleOpacity,
      transition: "visibility .3s, opacity 0.5s linear",
    }

    return (
      <Link to="/portfolio">
        <div className="arrow-btn-title next-page-title" style={nxtPgTitleVisibility}>
          <span>P</span>
          <span></span>
          <span>R</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>O</span>
        </div>
        <span id="nxt-pg" className={"arrow-btn " + this.state.nxtPgBtn} onMouseOver={this._onMouseOver} onMouseOut={this._onMouseOut}></span>
      </Link>  
      

    )
  }
}

  
export default NextPageBtn