import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';

import { HomepageNav } from '../components'
import { Picture } from '../components'
import { MainNav } from '../components'
import { Descr } from '../components'
import { NextPageBtn } from '../components'


import '../styles/styles.scss';



class HomePage extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._hidePicOnClick = this._hidePicOnClick.bind(this);
    this.state = {
      "showHideNav": "hidden",
      "hidePic": "zoomIn",
      "hideText": "none",
    }
    this.newRef = React.createRef();
    this.refToPic = React.createRef();
  }

  _handleClick(e) {
    var toggle = (this.state.showHideNav === "hidden") ? "show_nav" : "hidden";
    this.setState({"showHideNav": toggle});
  }

  _hidePicOnClick() {
    var picVisibility = (this.state.hidePic === "zoomIn") ? "zoomOut" : "zoomIn";
    var textVisibility = (this.state.hideText === "none") ? "block" : "none";

    console.log(picVisibility, textVisibility);
    this.setState({"hidePic": picVisibility, "hideText": textVisibility})
  }

  componentDidMount() {
    const DOMnodePic = ReactDOM.findDOMNode(this.refToPic.current);
    //DOMnodePic.parentElement.addEventListener('click', this._hidePicOnClick);
    //Hide the pic and show the text after certain time
    DOMnodePic.addEventListener("onLoad", function() {
      setTimeout(()=> {
        DOMnodePic.classList.remove('zoomIn');
        DOMnodePic.classList.add('zoomOut');
        DOMnodePic.nextElementSibling.style.display = 'block';
      },3500)
    }())
  }

  render() {

     let displayText = {
       display: this.state.hideText
     }

    return (
      <div id="homepage">
        <MainNav />
        <div id="page" className={this.state.showHideNav} >
        <NextPageBtn />
          <Container>

            <HomepageNav onClick={this._handleClick} />


            <main className="content">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>

              <div className="content-frame">

                <Row id="intro-line">
                  &lsaquo;Hi there /&rsaquo;
                </Row>      

                <Row>
                  <div id="homepagePic" ref={this.newRef} onClick={this._hidePicOnClick}>
                    <Picture hidepicture={this.state.hidePic} ref={this.refToPic}/>
                    <Descr style={displayText} />
                  </div> >

                </Row>

              </div>
            </main>
   
          </Container>
    
  </div>

  </div>
      

    )
  }
}


export default HomePage
