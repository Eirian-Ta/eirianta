import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';

import { MainNav } from '../components'
import { NextPageBtn } from '../components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import '../styles/styles.scss';



class Contact extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.state = {
      fullName: "",
      email: "",
      message: "",
    };
    this.uiRef = React.createRef();
  }



  _handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  _handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    this.setState({fullName: "", email: "", message: ""})

    alert(`submitted ${this.state.fullName} ${this.state.email} ${this.state.message}`);
    // fetch('http://www.focuspocus.io/magic/176acf497e03119e9453bfac47d1f6a2', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  componentDidMount() {
    const DOMnode = ReactDOM.findDOMNode(this.uiRef.current);
    DOMnode.addEventListener('mouseover', function() {
      console.log(DOMnode);
      document.getElementById("ui").classList.add("swapText");
    })
    DOMnode.addEventListener('mouseout', function() {
      console.log(DOMnode);
      document.getElementById("ui").classList.remove("swapText");
    })

    // window.setTimeout(function() {
    //   document.getElementById("ui").classList.add("swapText");
    // },5000)
  };


  render() {
    var renderHeadText =[];
    for (var i=0;i<40;i++) {
      renderHeadText.push(<h2 className="text">Contact <span className="textOut">me</span><span className="textIn"></span></h2>)
    }
    
    return (
      <div id="contact">
        <MainNav />
        <NextPageBtn />

        <main>
         {/* <h2>Contact me</h2>*/}
          <div className="header">
            <div id="ui">
              {renderHeadText}
            </div>
          </div>
          
          <section>
            <form onSubmit={this._handleSubmit}>
              <label className="visuallyhidden" htmlFor="name">Your name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Your Full Name" required onChange={this._handleChange} value={this.state.fullName}/>
              <label className="visuallyhidden" htmlFor="email">Your email</label>
              <input type="email"  id="email" name="email" placeholder="Your Email" required onChange={this._handleChange} value={this.state.email}/>
              <label className="visuallyhidden" htmlFor="message">Message</label>
              <textarea id="message" id="message" name="message" rows="5" placeholder="Message" required onChange={this._handleChange} value={this.state.message}></textarea>             
                
                {/*don't add onClick listener to the button because respond won't be triggered from keyboard*/}
              <button className="btn">Get in touch</button>
            </form>

            <div className="mov_round_eff" ref={this.uiRef} >
              <img id="profile_pic" src="../../../../../assets/photo/IMGP1133e.png" alt="Eirian's profile photo"/>
              <div id="rocket">
                <FontAwesomeIcon
                className="menu_open" 
                icon={['fab', "rocketchat"]}
                color="white"
                size="2x"
                />
              </div>
               

                             {/* <img id="rocket" src="../../../../../assets/photo/rocketchat_fontawesome.png" alt=""/>*/}
            </div>

          </section>
       
        </main>
        
        <footer>
          
        </footer>
        
    
  </div>


      

    )
  }
}


export default Contact
