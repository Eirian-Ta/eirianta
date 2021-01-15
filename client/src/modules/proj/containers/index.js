import React, { Component } from 'react'
//import { Container, Row, Col } from 'reactstrap';

import { MainNav } from '../components'
import { NextPageBtn } from '../components'

import { withProjs } from '../providers';
import { ProjList, ProjForm } from '../components';

import '../styles/styles.scss';

/**
 * Wrap Posts component using withPosts provider
 * for getting posts list in the Posts component
 */
// @withProjs
// export default class ProjRoot extends Component {
//   render() {
//     const { projs, projsLoading } = this.props;

//     return (
//       <Container>
//         <h2 className="posts-title">Posts Module</h2>
//         <hr />
//         <Row>
//           <Col>
//             <ProjList projsLoading={projsLoading} projs={projs} />
//           </Col>
//           <Col>
//             <ProjForm />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }


@withProjs
export default class ProjRoot extends Component {
  constructor() {
    super();
      this._checkDimensions = this._checkDimensions.bind(this);
      this._handleScroll = this._handleScroll.bind(this);
    // this._onMouseMove = this._onMouseMove.bind(this);
    this.state = {
      //width:  '80%',
      //half: '40%', 
      //leftBlue: '50%',
      //topBlue: '10%',
      widthLessThan800: false, 
      focused: "", 
    }
  }


   //check if an element is in viewport
   _handleScroll() {
    var isInViewport = function (elem) {
      var bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= -400 &&
        // Some browsers support window.innerWidth, other’s support document.documentElement.clientWidth
        bounding.bottom - 300 <= (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    var arr = document.getElementsByClassName('project_frame');

    for (const elem of arr) {
      console.log('listening to scrolling');
      if (isInViewport(elem)) {
        console.log(elem.id + " Is in viewport");
        document.getElementById(elem.id).classList.add("glow");
        //this.setState({focused: " glow"});
      }
      else {
        console.log(elem.id + " Not in view");
        document.getElementById(elem.id).classList.remove("glow");
        //this.setState({focused: ""});
      }
    }



  }

  _checkDimensions() {
    this.setState({ widthLessThan800: (window.innerWidth || document.documentElement.clientWidth) <=800 ? true : false });
    //console.log('*** THIS IS PROJECT PART ***'); 
    //console.log(this.state.widthLessThan800);
    
    if (this.state.widthLessThan800) {
      window.addEventListener('scroll', this._handleScroll, true);
    }
    else {
      window.removeEventListener('scroll', this._handleScroll, true)

      var arr = document.getElementsByClassName('project_frame');

      for (const elem of arr) {
        document.getElementById(elem.id).classList.remove("glow");
      }
    }

  }

  componentDidMount() {
    window.addEventListener("load", this._checkDimensions);
    window.addEventListener("resize", this._checkDimensions);

    }



  render() {
    const { projs, projsLoading } = this.props;

    
  var renderHeadText =[];
  for (var i=0;i<40;i++) {
    renderHeadText.push(<h2 className="text">PROJECTS</h2>)
  }


    return (
      <main className="content" id="portfolio">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <MainNav />
        <NextPageBtn />

        <div className="header">
            <div id="ui">
              {renderHeadText}
            </div>
          </div>

        <div>

            <ProjList projsLoading={projsLoading} projs={projs} />

            <ProjForm />

        </div> 
    </main>
      

    );
  }
}
