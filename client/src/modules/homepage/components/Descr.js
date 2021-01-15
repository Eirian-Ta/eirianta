import React, { Component } from 'react'


class Descr extends Component {
   constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={this.props.style} className="css-typing" id="about-me">
        <p>Though not E.T. </p>
        <p>- the Extra Terrestrial.</p>
        <p>I am <span>EIRIAN TA</span>, </p>
        <p>an Earth-based </p>
        <p>full stack <span>web developer.</span></p>    
        <p>I enjoy killing bugs.</p>
        <p>Not the ones in your bed, </p>
        <p>but the ones in your code &#9829;.</p>
      </div>
      

    )
  }
}


export default Descr
