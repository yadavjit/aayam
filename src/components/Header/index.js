
// import React from 'react'
import {Link,NavLink,useNavigate} from "react-router-dom"
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Navbar from 'react-bootstrap/Navbar';
// import "./index.css"
// const Header = () => {
//   // const auth=localStorage.getItem("user");
//   // const navigate=useNavigate()
//   // const logout=()=>{
//   //   localStorage.clear();
//   //   navigate("/signup")
//   // }
//   return (
//     <>
//     <Navbar bg="light" expand="lg" >
//     {/* {auth? */}
//       <ul className="nav-ul">
//         <li><Link to="/"><img src="https://www.aayamcareerinstitute.com/assets/images/aayam-logo-1.png" className="aayam_img" alt="aayam-logo"/></Link></li>
//         <li><Link to="/courses">COURSES</Link></li>
//         <li><Link to="/update">Update Products</Link></li>
//         <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
//             <div className="dropdown_items">
//               <NavDropdown.Item href="#action/3.1">About AAYAM</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Journey and Milestones
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Our Mission</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Our Vision</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Awards & Recognitions</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Board of Directors</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Faculty Pannel</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Why AAYAM</NavDropdown.Item>
              
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//               </div>
//             </NavDropdown>

        
//         {/* <li><Link to="/profile">Product Profile</Link></li>
//         {/* <li>{auth ? <Link onClick={logout} to="/signup">Logout</Link>:<Link to="/signup">Sign Up</Link>}</li>
//         <li><Link to="/login">Login</Link></li> */}

        
//           {/* <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
          
        
//       </ul>
//     :
      
//       <ul className="nav-ul nav-right">
//             <li><Link to="/signup">Sign Up</Link></li>
//             <li><Link to="/login">Login</Link></li> */}
//       </ul>
//       </Navbar>
      
    
//     </>

//   )
// }

// export default Header;









import React from 'react'
import "./index.css"
import  "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header=()=> {
  return (
    <>
    {/* <Container className="top-section"> */}
    <Navbar bg="danger" expand="lg" className="top-section" >
      {/* <Container className="top-section"> */}
        <Navbar.Brand href="#home"><img src="https://www.aayamcareerinstitute.com/assets/images/aayam-logo-1.png" className="aayam_img" alt="aayam-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Link to="/" className="home-link">HOME</Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <Link to="/courses" className="course-link">COURSES</Link>
            
            
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

            <NavDropdown title="ABOUT US"  id="basic-nav-dropdown" className="nav-option">
              <NavDropdown.Item><Link to="/aboutaayam">About AAYAM</Link></NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/journeyofaayam">Journey and Milestones</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/ourmission">Our Mission</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/ourvision">Our Vision</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/awards">Awards & Recognitions</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/directors">Board of Directors</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/faculty">Faculty Pannel</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="whyaayam">Why AAYAM</Link></NavDropdown.Item>
              
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="STUDENT PROFILE" id="basic-nav-dropdown">
            
              <NavDropdown.Item><Link to="/registrationform">Registration</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Online Platform
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pay Fee Online</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lakshya Test Series</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="EXAMS" id="basic-nav-dropdown">
            
              <NavDropdown.Item><Link to="/neetug">NEET UG</Link></NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/jeemains">JEE Mains</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/jeeadvance">JEE Advance</Link></NavDropdown.Item>
            </NavDropdown>

              <NavDropdown title="RESULTS"  className="nav-option">
              <NavDropdown.Item href="#action/3.1">Online Test Results</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Offline Test Results
              </NavDropdown.Item>
            </NavDropdown> 

          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
    {/* </Container> */}
  </>
  );
  
}


export default Header;
// const Header = () => {
//     const clickAbout=()=>{
//         return(
//             <h1>hii</h1>
                
//         )
//     }

  
  
//     return (
//     <>
//     <nav className="nav_bar">
//         <button type="button" onClick={()=>clickAbout()} className="btn-1">About us</button>

//         <h1>ESE</h1>
//         <h1>Gate</h1>
//         <h1>PSU</h1>
//         <h1>SSE JE</h1>
//         <h1>Courses</h1>
//         <h1>New Batch</h1>
//         <h1>Admissions</h1>
//         <h1>Fee Structure</h1>
//         <h1>Test Series</h1>
//         <h1>Our Results</h1>
//         <h1>Centers</h1>
//         <h1>Downloads</h1>
//         <h1>Contact us</h1>

//     </nav>
//      {/* <h1>Header</h1> 
//      <div id="mobile-menu" className="style-menu">
//     <ul>
//         <li>
//             <div class="home">
//                 <a href="/index.aspx"><i class="icon-home"></i>Home</a>
//             </div>
//         </li>
        
//                 <li id="mobilemenu1_reptop_ctl00_li_main"><a href="aboutmadeeasy.aspx?mpgid=1&pgidtrail=1" id="mobilemenu1_reptop_ctl00_atop">
//                     About Us</a>
//                     <ul id="mobilemenu1_reptop_ctl00_ulinner">
                        
//                                 <li><a href="aboutmadeeasy.aspx?mpgid=1&pgidtrail=1" id="mobilemenu1_reptop_ctl00_repinner_ctl00_atop">
//                                     About MADE EASY</a></li>
                                
                                
                                
                                
                            
//                                 <li><a href="milestone.aspx?mpgid=1&pgidtrail=7" id="mobilemenu1_reptop_ctl00_repinner_ctl01_atop">
//                                     Journey and Milestones</a></li>
                                
                                
                                
                                
                            
//                                 <li><a href="boardofdirectors.aspx?mpgid=1&pgidtrail=120" id="mobilemenu1_reptop_ctl00_repinner_ctl02_atop">
//                                     Awards & Recognitions</a></li>
                                
                                
                                
                                
                            
//                                 <li><a href="boardofdirectors.aspx?mpgid=1&pgidtrail=9" id="mobilemenu1_reptop_ctl00_repinner_ctl03_atop">
//                                     Board of Directors</a></li>
                                
                                
                                
                                
                            
//                                 <li><a href="aboutcmd.aspx?mpgid=1&pgidtrail=8" id="mobilemenu1_reptop_ctl00_repinner_ctl04_atop">
//                                     About CMD</a></li>
                                
                                
                                
                                
                            
//                                 <li><a href="valuesandstrengths.aspx?mpgid=1&pgidtrail=5" id="mobilemenu1_reptop_ctl00_repinner_ctl05_atop">
//                                     Faculty Panel</a></li>
                                
                                
                                
                                
                            
//                                 <li><a href="whymadeeasy.aspx?mpgid=1&pgidtrail=6" id="mobilemenu1_reptop_ctl00_repinner_ctl06_atop">
//                                     Why MADE EASY?</a></li>
                                
                                
                                
                                
                            
//                     </ul>
                    
                    
                    
                    
//                 </li>
//                 </ul>
//                 </div> */}
                

//     </>
//   )
// }

// export default Header; 