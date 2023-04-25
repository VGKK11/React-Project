import React from 'react';
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
    <div className="header_left">
    <h1>
      PORTFO<span>LIO</span>
    </h1>
    </div>
<div className="header_right">
<Link to="about" smooth={true} duration={500}>
<h4>
 ABOUT ME
</h4>
</Link>
<Link to="skills" smooth={true} duration={500}>
<h4>
  SKILLS
</h4>
</Link>

<Link to="exp" smooth={true} duration={500}>
<h4>
  CERTIFICATES
</h4>
</Link>
<Link to="contact" smooth={true} duration={500}>
<h4>
   CONTACT
</h4>
</Link>

</div>
    </div>
    
  )
}

export default Header