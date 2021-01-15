import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class HomepageNav extends Component {
  constructor(props) {
    super(props);
  }

    componentDidMount() {
    document.getElementById('menu_toggle').addEventListener("onclick", this.props.onClick);
  }

  render() {
    return (
      <div>
       <span id="menu_toggle" onClick={this.props.onClick}>
         <FontAwesomeIcon
          className="menu_open" 
          icon={['fab', "rocketchat"]}
          color="white"
          size="2x"
          />
         <FontAwesomeIcon
          className="menu_close" 
          icon="times"
          color="white"
          size="2x"
          />
       </span>
        <ul 
        className="menu_items"
      >
        <li><a href="">
          <FontAwesomeIcon
          className="icon" 
          icon={['fab', "linkedin-in"]}
          color="black"
          size="1x"
          />
        </a></li>
        <li><a href="">
          <FontAwesomeIcon
          className="icon" 
          icon={['fab', "github-alt"]}
          color="black"
          size="1x"
          />
        </a></li>
        <li><a href="">
          <FontAwesomeIcon
          className="icon" 
          icon="envelope"
          color="black"
          size="1x"
          />
        </a></li>
      </ul>
        
      </div>
      

    )
  }
}

  
export default HomepageNav