import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

export default class ProjList extends Component {
  constructor(props) {
    super(props);

    this.showProjs = this.showProjs.bind(this);

    this._checkDimensions = this._checkDimensions.bind(this);
    this._handleScroll = this._handleScroll.bind(this);

    this.state = {
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



  showProjs() {
    const { projs, projsLoading } = this.props;

    if (!projsLoading && projs.length > 0) {
      return projs.map(proj => {
        var techArr = proj.tech.split(';');
        var sketch, iconFrameMon, iconFramePhone;
        if (proj.type == 'website') {
          sketch = '../../../../../assets/photo/workspace_sketch_white.png';
          iconFrameMon = '../../../../../assets/photo/workspace_mon.png';
          iconFramePhone = '../../../../../assets/photo/workspace_phone.png';
        }
        else {
          sketch='../../../../../assets/photo/phone_sketch_white.png';
          iconFramePhone = '../../../../../assets/photo/phone.png';
        }

        return (

          <div key={proj._id} className="project_frame" id={proj._id}>
            <div className="project_image_frame">
              <img className="project_icon_frame sketch" src={sketch} alt=""/>
              <div className="full">
                {iconFrameMon ? <img className="project_icon_frame mon" src={iconFrameMon} alt=""/> : console.log('Not a web proj')}               
                <img className="project_icon_frame mon" src={proj.monPic} alt=""/>
                <img className="project_icon_frame phone" src={iconFramePhone} alt=""/>
                <img className="project_icon_frame phone" src={proj.mobPic} alt=""/>   
                {iconFrameMon ? <img className="project_icon_frame mon" src="../../../../../assets/photo/workspace_kb.png" alt=""/> : console.log('Not a web proj')}               
              </div>
            </div>
            <div className="des">    
              <h3>{proj.title}</h3>
              <h4>#{proj.type}</h4>
              <p>{proj.desc}</p>
              <ul>
                {techArr.map((tech,index) => {
                  return (
                    <li key={index}>{tech}</li>
                  )
                })}

              </ul>
              <div className="buttons">
                {proj.liveURL ? <a className="btn" href={proj.liveURL} target="_blank">Live</a> : console.log('No LiveURL for project ' + proj.title)}
                {proj.codeURL ? <a className="btn" href={proj.codeURL} target="_blank">Code</a> : console.log('No CodeURL for project ' + proj.title)}
                {proj.viewURL ? <a className="btn" href={proj.viewURL} target="_blank">Demo</a> : console.log('No ViewURL for project ' + proj.title)}
              </div>
            

            </div>  
          </div>

        );
      });
    } 
    
    else {
     console.log('There are no projects in database OR projects are being loaded');
    }
  }

  render() {
    return (
      <div className="projects-container">
        {this.showProjs()}
      </div>
    );
  }
}

