import React, { Component } from 'react'
import { Link } from "react-router-dom";



import '../styles/styles.scss';



class Picture extends Component {
   constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props)

    return (
      <div id="badge" className={"badge " + this.props.hidepicture}>
        <p className="text">I'm E.T.</p>
        
      </div>
      

    )
  }
}


export default Picture
