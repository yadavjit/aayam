import React from 'react'
import { Link } from 'react-router-dom';
import { FaLaptop } from "react-icons/fa";
import {GrContactInfo} from "react-icons/gr"
import {MdWorkOutline} from "react-icons/md"
import "./index.css";
const TopHeader = () => {
  return (
    <>
    <nav>
        <img src="https://www.aayamcareerinstitute.com/assets/images/aayam-logo-1.png" className="aayam_img" alt="aayam-logo"/>
        <div className="top-header">
        <div>
            <FaLaptop/>
            <a href="https://test.aayamcareerinstitute.co.in/#/login">
                ONLINE PORTAL
            </a>
        </div>
        <div>
            <GrContactInfo/>
            <Link to="/contactus">CONTACT US</Link>
        </div>
        <div>
            <MdWorkOutline/>
            <Link to="/careers">CAREERS</Link>
        </div>
        </div>
        {/* <Link to={{"https://test.aayamcareerinstitute.co.in/#/login" }} target="_blank">ONLINE PLATFORM</Link> */}

     </nav> 
    </>
  )
}

export default TopHeader;

//     <a href="tel:9021300500" class="mumber"><i class="fa fa-phone" aria-hidden="true"></i> 9021300500 </a>
//     <nav class="navbar navbar-toggleable-md nav-top">
   
// <div class="collapse navbar-collapse nav" id="navbarCollapse">

//     <ul class="navbar-nav mr-auto">
//     <ul class="navbar-nav mr-auto mob-extra-menu">
//           <li class="nav-item active text-center ">
       
//         <a href="https://www.madeeasy.in/course.aspx?mpgid=42&amp;pgidtrail=42">
//             <img src="/images/postal-icon.png" alt="Courses" class="img-fluid "></a> <br>

//             <a href="https://www.madeeasy.in/home/upcoming-batches">
//             <img src="/images/postal-icon.png" alt="New Batches" class="img-fluid"></a><br>


//             <li class="nav-item text-center "><a href="https://onlinetestseriesmadeeasy.in/">
//             <img src="/images/make-payment.png" alt="Online Test Series" class="img-fluid"></a> <br>
//             <a class="nav-link" href="https://onlinetestseriesmadeeasy.in/" target="_blank"></a>


//             <a href="https://madeeasypublications.org/postal/home/postal-study-package.html">
//             <img src="/images/postal-icon.png" alt="Postal Book Package" class="img-fluid"></a>
    
    
//             <a class="nav-link" href="https://gaterankpredictor.madeeasy.in/">
//                 GATE 2023 Rank Predictor</a> </li>
//                 </ul>






    {/* <header class="header-sticky">
<div class="container">
 <div class="row top-head">
<div class="col-lg-4 col-sm-4 col-md-3 made_easey d-flex">
<a class="logo" href="/index.aspx"><img src="/images/Logo-H.png" alt="Logo" class="img-fluid"></a>
</div>

<div class="col-lg-8 col-sm-8 col-md-9">
<div class="row">
<div class="col-xs-12 col-lg-12 col-md-12 col-sm-12">
<div class="coll-us">

<div class="sprite11 icon5 online_portal"><a href="https://www.madeeasyprime.com/" target="_blank"><img src="/images/blink-im.gif" alt="Live Classes" class="img-fluid"> Live/Online Classes</a></div>
<div class="sprite11 icon4 online_portal"><a href="https://onlinetestseriesmadeeasy.in/" target="_blank">Online Test Series</a></div>
<div class="sprite11 icon5a online_portal" style="width:140px"><a href="https://madeeasypublications.org/postal/home/postal-study-package.html" target="_blank"><img src="/images/blink-im.gif" alt="NEXT IAS" class="img-fluid">Postal Package</a></div>
<!--<div class="sprite11 icon4 scholarship"><a href="https://www.madeeasy.in/irms">IRMSE</a></div>-->
<a href="tel:9021300500" class="mumber"><i class="fa fa-phone" aria-hidden="true"></i> 9021300500 </a>
</div>
</div>
<div class="col-xs-12 col-lg-12 col-md-12 col-sm-12 online_top_admission">
<nav class="navbar navbar-toggleable-md nav-top">
   
<div class="collapse navbar-collapse nav" id="navbarCollapse">

    <ul class="navbar-nav mr-auto">
    <ul class="navbar-nav mr-auto mob-extra-menu">
          <li class="nav-item active text-center ">
       
        <a href="https://www.madeeasy.in/course.aspx?mpgid=42&amp;pgidtrail=42">
            <img src="/images/postal-icon.png" alt="Courses" class="img-fluid "></a> <br>
         
            <a class="nav-link" href="https://www.madeeasy.in/course.aspx?mpgid=42&amp;pgidtrail=42">
             
                Courses</a> </li>
        <li class="nav-item active text-center">
       
        <a href="https://www.madeeasy.in/home/fee-structure">
            <img src="/images/postal-icon.png" alt="Fee Structure" class="img-fluid"></a> <br>
           
            <a class="nav-link" href="https://www.madeeasy.in/home/fee-structure">
              Fee Structure</a> </li>
              
               <li class="nav-item active text-center">
       
        <a href="https://www.madeeasy.in/home/upcoming-batches">
            <img src="/images/postal-icon.png" alt="New Batches" class="img-fluid"></a><br>
          
            <a class="nav-link" href="https://www.madeeasy.in/home/upcoming-batches">
             New Batches</a> </li>
			 
             
              <li class="nav-item active text-center "><a href="https://www.madeeasy.in/home/TermsConditions">
            <img src="/images/online-admition.png" alt="Online Admission" class="img-fluid"></a> <br>
            <a class="nav-link" href="https://www.madeeasy.in/home/TermsConditions">Online Admission</a>
        </li>
          <li class="nav-item text-center "><a href="https://onlinetestseriesmadeeasy.in/">
            <img src="/images/make-payment.png" alt="Online Test Series" class="img-fluid"></a> <br>
            <a class="nav-link" href="https://onlinetestseriesmadeeasy.in/" target="_blank">
                Online Test Series</a> </li>
                 <li class="nav-item active text-center ">
       
        <a href="https://madeeasypublications.org/postal/home/postal-study-package.html">
            <img src="/images/postal-icon.png" alt="Postal Book Package" class="img-fluid"></a>
         
            <a class="nav-link" href="https://madeeasypublications.org/postal/home/postal-study-package.html">
                Postal Book Package</a> </li>
				<li class="nav-item active text-center ">
       
        <a href="https://www.madeeasy.in/home/Careers">
            <img src="/images/postal-icon.png" alt="Careers" class="img-fluid"></a><br>
         
            <a class="nav-link" href="https://www.madeeasy.in/home/Careers">
                Careers</a> </li>
				<li class="nav-item active text-center ">
       
        <a href="https://gaterankpredictor.madeeasy.in/">
            <img src="/images/postal-icon.png" alt="Careers" class="img-fluid"></a><br>
         
            <a class="nav-link" href="https://gaterankpredictor.madeeasy.in/">
                GATE 2023 Rank Predictor</a> </li>
                </ul>
                
                
        <!--<li class="nav-item active text-center hidden-sm-down">
       
        <a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&coursetypeid=1&courseid=7">
            <img src="/images/postal-icon.png" alt="Postal Study Package" class="img-fluid"></a>
          
            <a class="nav-link" href="/postal.aspx?mpgid=98&pgidtrail=98&courseid=7&coursetypeid=3">
                Postal Study Package</a> </li>-->
        <li class="nav-item active text-center hidden-sm-down"><a href="/termsandconditions.aspx?mpgid=90&amp;pgidtrail=90">
            <img src="/images/online-admition.png" alt="Online Admission" class="img-fluid"></a> <a class="nav-link" href="/termsandconditions.aspx?mpgid=90&amp;pgidtrail=90">Online Admission</a>
        </li>
<li class="nav-item text-center hidden-sm-down"><a href="https://onlineadmissions.madeeasy.in/login/login.aspx?ReturnUrl=%2f">
            <img src="/images/make-payment.png" alt="Student Portal" class="img-fluid"></a> <a class="nav-link" href="https://studentportal.madeeasy.in/" target="_blank">Student Portal</a> </li>
        <!--<li class="nav-item text-center hidden-sm-down"><a href="https://onlineadmissions.madeeasy.in/login/login.aspx?ReturnUrl=%2f">
            <img src="/images/make-payment.png" alt="Online Test Series" class="img-fluid"></a> <a class="nav-link"
                href="https://onlinetestseriesmadeeasy.in/" target="_blank">
                Online Test Series</a> </li>-->
				<li class="nav-item text-center hidden-sm-down"><a href="/home/Careers">
            <img src="/images/make-payment.png" alt="Careers" class="img-fluid"></a> <a class="nav-link" href="/home/Careers">
                Careers</a> </li>
                
                <li class="nav-item text-center hidden-sm-down"><a href="/contact.aspx?mpgid=70&amp;pgidtrail=70">
            <img src="/images/make-payment.png" alt="Contact Us" class="img-fluid"></a> <a class="nav-link" href="/contact.aspx?mpgid=70&amp;pgidtrail=70">
                Contact Us</a> </li>
                
        <li class="search_icon search_new nav-item text-center">
         <a href="https://gaterankpredictor.madeeasy.in/">
            <img src="/images/New_icons.gif" alt="GATE 2021 Rank Predictor" class="img-fluid"></a>
        <a href="https://gaterankpredictor.madeeasy.in/" target="_blank">GATE 2023 Rank Predictor </a>
            
        </li>
        
        
         
                
                
                
                
    </ul>
</div>

    </nav>
    </div>
</div>    

</div>
</div>
</div>
<div class="nav-bot">
<div class="container">
<div class="row">
<div class="col-lg-12 main_manu ">
<nav class="navbar navbar-toggleable-md">
    <div class="collapse navbar-collapse nav" id="navbarCollapse">
        
<ul class="navbar-nav mr-auto">
    
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl00_li_main" class="nav-item active text-center dropdown"><a href="aboutmadeeasy.aspx?mpgid=1&amp;pgidtrail=1" id="topmenu1_reptrtopmenu_ctl00_atop" class="nav-link" target="_self">
                ABOUT US</a>
                <ul id="topmenu1_reptrtopmenu_ctl00_ulinner" class="dropdown-menu mega-menu">
                    <div id="topmenu1_reptrtopmenu_ctl00_innerhower" class="about-hover ">
                        <div class="main-hover ">
                            <div class="container">
                                <div class="row">
                                    <div id="topmenu1_reptrtopmenu_ctl00_divbg" class="col-lg-12 col-md-12 col-xs-12 ">
                                        <div id="topmenu1_reptrtopmenu_ctl00_divmainhover" class="main-hover-left">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h2 id="topmenu1_reptrtopmenu_ctl00_divhead">
                                                        About Us
                                                    </h2>
                                                </div>
                                                <div id="topmenu1_reptrtopmenu_ctl00_divrepmain" class="col-md-12 col-xs-12 menu_box">
                                                    <ul class="row no-gutters mb-5">
                                                        
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                <li id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl00_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="aboutmadeeasy.aspx?mpgid=1&amp;pgidtrail=1" id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl00_atop_inner" target="_self">
                                                                    About MADE EASY</a></li>
                                                            
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                <li id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl01_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="milestone.aspx?mpgid=1&amp;pgidtrail=7" id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl01_atop_inner" target="_self">
                                                                    Journey and Milestones</a></li>
                                                            
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                <li id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl02_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="boardofdirectors.aspx?mpgid=1&amp;pgidtrail=120" id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl02_atop_inner" target="_self">
                                                                    Awards &amp; Recognitions</a></li>
                                                            
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                <li id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl03_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="boardofdirectors.aspx?mpgid=1&amp;pgidtrail=9" id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl03_atop_inner" target="_self">
                                                                    Board of Directors</a></li>
                                                            
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                <li id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl04_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="aboutcmd.aspx?mpgid=1&amp;pgidtrail=8" id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl04_atop_inner" target="_self">
                                                                    About CMD</a></li>
                                                            
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                <li id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl05_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="valuesandstrengths.aspx?mpgid=1&amp;pgidtrail=5" id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl05_atop_inner" target="_self">
                                                                    Faculty Panel</a></li>
                                                            
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                <li id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl06_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="whymadeeasy.aspx?mpgid=1&amp;pgidtrail=6" id="topmenu1_reptrtopmenu_ctl00_rpt_inner_ctl06_atop_inner" target="_self">
                                                                    Why MADE EASY?</a></li>
                                                            
                                                    </ul>
                                                </div>

                                                
                                            </div>
                                        </div>
                                    </div>
                                  
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </ul>
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl01_li_main" class="nav-item active text-center dropdown"><a href="examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11" id="topmenu1_reptrtopmenu_ctl01_atop" class="nav-link" target="_self">
                ESE</a>
                <ul id="topmenu1_reptrtopmenu_ctl01_ulinner" class="dropdown-menu mega-menu">
                    <div id="topmenu1_reptrtopmenu_ctl01_innerhower" class="about-hover ">
                        <div class="main-hover ">
                            <div class="container">
                                <div class="row">
                                    <div id="topmenu1_reptrtopmenu_ctl01_divbg" class="col-lg-12 col-md-12 col-xs-12 ">
                                        <div id="topmenu1_reptrtopmenu_ctl01_divmainhover" class="main-hover-left">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h2 id="topmenu1_reptrtopmenu_ctl01_divhead">
                                                        Engineering Services Examination (ESE/ IES)
                                                    </h2>
                                                </div>
                                                

                                                <div id="topmenu1_reptrtopmenu_ctl01_divrepexam" class="col-md-12 col-xs-12 menu_box">
                                                    <ul class="row no-gutters mb-5">
                                                        
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl00_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=2#check2" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl00_anch">
                                                                    ESE 2023 Eligibility</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl01_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=38#check38" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl01_anch">
                                                                    Salary of IES Officers</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl02_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=3#check3" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl02_anch">
                                                                    ESE 2023 Exam Pattern</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl03_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="Uploads/image/1775imguf_AnnuCalend_2023.pdf" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl03_anch" target="_blank">
                                                                    UPSC Exam Calendar 2023</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl04_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=5#check5" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl04_anch">
                                                                    ESE 2023 Syllabus</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl05_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=6#check6" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl05_anch">
                                                                    ESE 2023 Preparation Strategy</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl06_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=7#check7" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl06_anch">
                                                                    ESE 2023 Exam Schedule</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl07_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=8#check8" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl07_anch">
                                                                    Medical Standard for ESE</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl08_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=9#check9" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl08_anch">
                                                                    ESE Topper's Speak</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl09_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=10#check10" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl09_anch">
                                                                    ESE 2023 Resources</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl10_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=11#check11" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl10_anch">
                                                                    ESE 2022 Interview Top Scorer</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl11_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=12#check12" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl11_anch">
                                                                    ESE 2022 Cutoff Marks</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl12_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=9&amp;mpgid=11&amp;pgidtrail=11&amp;id=37#check37" id="topmenu1_reptrtopmenu_ctl01_repexamnew_ctl12_anch">
                                                                    ESE 2022: Marks of Recommended Candidates</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </ul>
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl02_li_main" class="nav-item active text-center dropdown"><a href="examdetail.aspx?examid=1&amp;mpgid=26&amp;pgidtrail=26" id="topmenu1_reptrtopmenu_ctl02_atop" class="nav-link" target="_self">
                GATE</a>
                <ul id="topmenu1_reptrtopmenu_ctl02_ulinner" class="dropdown-menu mega-menu">
                    <div id="topmenu1_reptrtopmenu_ctl02_innerhower" class="about-hover ">
                        <div class="main-hover ">
                            <div class="container">
                                <div class="row">
                                    <div id="topmenu1_reptrtopmenu_ctl02_divbg" class="col-lg-12 col-md-12 col-xs-12 ">
                                        <div id="topmenu1_reptrtopmenu_ctl02_divmainhover" class="main-hover-left">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h2 id="topmenu1_reptrtopmenu_ctl02_divhead">
                                                        Graduate Aptitude Test in Engineering (GATE)
                                                    </h2>
                                                </div>
                                                

                                                <div id="topmenu1_reptrtopmenu_ctl02_divrepexam" class="col-md-12 col-xs-12 menu_box">
                                                    <ul class="row no-gutters mb-5">
                                                        
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl00_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/home/GATE#gate2023eligibility" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl00_anch">
                                                                    GATE 2023 Eligibility</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl01_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/home/GATE#gateexampreparationstrategy" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl01_anch">
                                                                    GATE Exam Preparation Strategy</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl02_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/home/GATE#gate2023examschedule" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl02_anch">
                                                                    GATE 2023 Exam Schedule</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl03_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/home/GATE#subjectspecializationpriority" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl03_anch">
                                                                    Subject Specialization Priority</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl04_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/home/GATE#testimonials" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl04_anch">
                                                                    Testimonials</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl05_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/cpage.aspx?mpgid=116&amp;pgidtrail=116" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl05_anch">
                                                                    GATE 2023 Resources</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl06_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/home/GATE#gate2023notification" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl06_anch">
                                                                    GATE 2023 Notification</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl07_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="Uploads/image/1891imguf_GATE-Virtual-Calculator.pdf" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl07_anch" target="_blank">
                                                                    GATE Virtual Calculator</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl08_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/home/GATE#listofiits" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl08_anch">
                                                                    List of IITs</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl09_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/home/GATE#listofnits" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl09_anch">
                                                                    List of NITs</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl10_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/home/GATE#listofiiits" id="topmenu1_reptrtopmenu_ctl02_repexamnew_ctl10_anch">
                                                                    List of IIITs</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </ul>
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl03_li_main" class="nav-item active text-center dropdown"><a href="examdetail.aspx?examid=3&amp;mpgid=41&amp;pgidtrail=41" id="topmenu1_reptrtopmenu_ctl03_atop" class="nav-link" target="_self">
                PSUs</a>
                <ul id="topmenu1_reptrtopmenu_ctl03_ulinner" class="dropdown-menu mega-menu">
                    <div id="topmenu1_reptrtopmenu_ctl03_innerhower" class="about-hover ">
                        <div class="main-hover ">
                            <div class="container">
                                <div class="row">
                                    <div id="topmenu1_reptrtopmenu_ctl03_divbg" class="col-lg-12 col-md-12 col-xs-12 ">
                                        <div id="topmenu1_reptrtopmenu_ctl03_divmainhover" class="main-hover-left">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h2 id="topmenu1_reptrtopmenu_ctl03_divhead">
                                                        Public Sector Undertakings (PSUs)
                                                    </h2>
                                                </div>
                                                

                                                <div id="topmenu1_reptrtopmenu_ctl03_divrepexam" class="col-md-12 col-xs-12 menu_box">
                                                    <ul class="row no-gutters mb-5">
                                                        
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl03_repexamnew_ctl00_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=3&amp;mpgid=41&amp;pgidtrail=41&amp;id=29#check29" id="topmenu1_reptrtopmenu_ctl03_repexamnew_ctl00_anch">
                                                                    PSUs Salary Structure</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl03_repexamnew_ctl01_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=3&amp;mpgid=41&amp;pgidtrail=41&amp;id=30#check30" id="topmenu1_reptrtopmenu_ctl03_repexamnew_ctl01_anch">
                                                                    PSUs Age Criteria</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl03_repexamnew_ctl02_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="/examdetail.aspx?examid=3&amp;mpgid=41&amp;pgidtrail=41&amp;id=31#check31" id="topmenu1_reptrtopmenu_ctl03_repexamnew_ctl02_anch">
                                                                    PSUs Percentage Criteria</a></li>
                                                                
                                                            
                                                                
                                                                
                                                                        
                                                              
                                                                <li id="topmenu1_reptrtopmenu_ctl03_repexamnew_ctl03_li_inner" class="col-12 col-sm-4 mr-0 mr-sm-3"><a href="Uploads/image/1236imguf_PSUs-List.pdf" id="topmenu1_reptrtopmenu_ctl03_repexamnew_ctl03_anch" target="_blank">
                                                                    List of PSUs</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </ul>
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl04_li_main" class="nav-item active text-center dropdown"><a href="ssc-je" id="topmenu1_reptrtopmenu_ctl04_atop" class="nav-link" target="_self">
                SSC - JE</a>
                
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl05_li_main" class="nav-item active text-center dropdown"><a href="course.aspx?mpgid=42&amp;pgidtrail=42" id="topmenu1_reptrtopmenu_ctl05_atop" class="nav-link" target="_self">
                COURSES</a>
                <ul id="topmenu1_reptrtopmenu_ctl05_ulinner" class="dropdown-menu mega-menu">
                    
                    <div id="topmenu1_reptrtopmenu_ctl05_divinnercourse" class="about-hover  cource-hover">
                        <div class="main-hover ">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-xs-12 ">
                                        <div class="main-hover-left">
                                          <div class="row course-mega">
	<div class="col-lg-12">
		<div class="row">
			<div class="col-lg-8">
				<h4>
					CLASSROOM COURSES</h4>
			</div>
			<div class="col-lg-4">
				<h4>
					<b>LIVE-ONLINE COURSES</b></h4>
			</div>
		</div>
	</div>
	<div class="col-md-4 col-xs-12 menu_box withoutarr0" id="style-10">
		<ul class="row no-gutters mb-1">
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"><strong>GATE: 1 Year Foundation Course</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/home/ClassroomGATE/Regular">Regular</a></li>
					<!--<li class="col-12  mr-0 mr-sm-3 style=">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=60&coursetypeid=2">Weekend Hybrid</a></li>-->
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"><strong>GATE: 1 Year Flexi Course</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=72&amp;coursetypeid=1">Regular</a></li>
					<!--<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=61&coursetypeid=2">Weekend Hybrid</a></li>-->
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"><strong>GATE + SES(GS) : 1 Year Foundation Course</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=70&amp;coursetypeid=1">Regular</a></li>
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"><strong>GATE + SES(GS) : 1 Year Flexi Course</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=74&amp;coursetypeid=1">Regular</a></li>
					<!--<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=6&coursetypeid=2">Weekend</a></li>-->
				</ul>
			</li>
			<!--<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"><strong>GATE Exclusive: Rank Improvement Course</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://www.madeeasyprime.com/gate-rank-improvement-batch-online" style="width:150px">Live-Online</a></li>
				</ul>
			</li>-->
			<li class="col-12" mr-0="" mr-sm-3="">
				<a class="mmheading no-bg"> <strong>Conventional Practice Programme for ESE Mains 2023</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=21&amp;coursetypeid=1">Regular</a></li>
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=21&amp;coursetypeid=1" style="width:300px">Live-Online</a></li>
				</ul>
			</li>
			<!--<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"><strong>ESE + GATE: 2 Years Repeat Course + OTS</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=58&coursetypeid=1">Regular</a></li>
				</ul>
			</li>--><!--<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"> <strong>UPPSC: Uttar Pradesh Public Service Commission</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=43&coursetypeid=1">Regular</a></li>
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=43&coursetypeid=4">Live/Online</a></li>
				</ul>
			</li>--><!--<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"> <strong>ESE + GATE: Super Talent Batches</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=5&coursetypeid=1">Regular</a></li>
					<!--<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=9&coursetypeid=2">Weekend</a></li>--><!--<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"> <strong>ESE + GATE: Rank Improvement Batches</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=10&coursetypeid=3">Regular</a></li>
					<!--<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=26&coursetypeid=2">Weekend</a></li>-->
		</ul>
	</div>
	<div class="col-md-4 col-xs-12 menu_box withoutarr0" id="style-10">
		<ul class="row no-gutters mb-5">
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"> <strong>GATE + ESE : 1 Year Foundation Course</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=2&amp;coursetypeid=1">Regular</a></li>
					<!--<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=62&coursetypeid=2">Weekend Hybrid</a></li>-->
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"> <strong>ESE + GATE : 1 Year Flexi Course</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=71&amp;coursetypeid=1">Regular</a></li>
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"> <strong>ESE + GATE + SES (GS) : 1 Year Foundation Course</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=56&amp;coursetypeid=1">Regular</a></li>
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"> <strong>ESE + GATE + SES (GS) : 1 Year Flexi Course</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=73&amp;coursetypeid=1">Regular</a></li>
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"> <strong>ESE Exclusive: G.S. &amp; Engineering Aptitude Batches</strong></a>
				<ul class="reg-menu">
					<!--<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=9&coursetypeid=1">Regular</a></li>-->
					<li class="col-12  mr-0 mr-sm-3">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=9&amp;coursetypeid=4">Online</a></li>
				</ul>
			</li>
			<!--<li class="col-12  mr-0 mr-sm-3">
						<a class="mmheading no-bg"> <strong>Rajasthan Junior Engineer Examination</strong></a>
						<ul class="reg-menu">
							<li class="col-12  mr-0 mr-sm-3">
								<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=48&coursetypeid=1">Regular</a></li>
						</ul>
					</li>-->
		</ul>
	</div>
	<div class="col-md-4 col-xs-12 menu_box withoutarr0" id="style-10">
		<ul class="row no-gutters">
			<li class="col-12  mr-0 mr-sm-3">
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3" style="width:120px">
						<a href="https://www.madeeasyprime.com/" style="target:blank"><strong>GATE 2024</strong></a></li>
					<!--<li class="col-12  mr-0 mr-sm-3" style="width:120px">
						<a href="https://www.madeeasyprime.com/" style="target:blank">ESE 2023</a></li>-->
					<li class="col-12  mr-0 mr-sm-3" style="width:160px">
						<a href="https://www.madeeasyprime.com/" style="target:blank"><strong>GATE+ESE 2024</strong></a></li>
					<li class="col-12  mr-0 mr-sm-3" style="width:170px">
						<a href="https://www.madeeasyprime.com/" style="target:blank; width: 210px"><strong>GATE+ESE+SES(GS) 2024</strong></a></li>
					<!--<li class="col-12  mr-0 mr-sm-3" style="width:170px">
						<a href="https://www.madeeasyprime.com/first-step-live-online-course" style="target:blank; width: 200px"><strong>First Step Course</strong></a></li>-->
					<li class="col-12  mr-0 mr-sm-3" style="width:160px">
						<a href="https://www.madeeasyprime.com/" style="target:blank"><strong>Other Exams</strong></a></li>
				</ul>
			</li>
			<br>
		</ul>
		<h4>
			TEST SERIES</h4>
		<ul class="row no-gutters">
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"><strong>Online Test Series</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://onlinetestseriesmadeeasy.in/gate2023/gate" style="target:blank">GATE</a></li>
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://onlinetestseriesmadeeasy.in/ese2023/ese" style="target:blank">ESE</a></li>
					<li class="col-12  mr-0 mr-sm-3" style="width:130px">
						<a href="https://onlinetestseriesmadeeasy.in/" style="target:blank">Other Exams</a></li>
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<a class="mmheading no-bg"><strong>Classroom Test Series</strong></a>
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3" style="width:135px">
						<a href="/ese-prelims-classroom-test-series">ESE Prelims</a></li>
					<li class="col-12  mr-0 mr-sm-3" style="width:120px">
						<a href="/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=38&amp;coursetypeid=3">ESE Mains</a></li><!--<li class="col-12  mr-0 mr-sm-3" style="width:135px">
						<a href="/coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=13&coursetypeid=3">ESE Prelims</a></li>-->
				</ul>
			</li>
		</ul>
		<h4>
			POSTAL BOOKS PACKAGE</h4>
		<ul class="row no-gutters mb-5">
			<li class="col-12  mr-0 mr-sm-3">
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html">GATE</a></li>
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html">ESE</a></li>
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html" style="width:100px">CSE</a></li>
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html">UPPSC</a></li>
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html">MPSC</a></li>
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html">OPSC</a></li>
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html">BPSC</a></li>
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html" style="width:100px">RSSB-JE</a></li>
					<li class="col-12  mr-0 mr-sm-3">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html" style="width:100px">SSC-JE</a></li>
				</ul>
			</li>
			<li class="col-12  mr-0 mr-sm-3">
				<ul class="reg-menu">
					<li class="col-12  mr-0 mr-sm-3" style="width:400px">
						<a href="https://madeeasypublications.org/postal/home/postal-study-package.html">GS for State Exams</a></li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="col-lg-12 view-dtail-course">
		<h3>
			<a href="/course.aspx?mpgid=42&amp;pgidtrail=42">View Details <i aria-hidden="true" class="fa fa-arrow-circle-o-right">&nbsp;</i> </a></h3>
	</div>
</div>
<p>
	&nbsp;</p>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl06_li_main" class="nav-item active text-center dropdown"><a href="upcomingbatches.aspx?mpgid=43&amp;pgidtrail=43" id="topmenu1_reptrtopmenu_ctl06_atop" class="nav-link" target="_self">
                NEW BATCHES</a>
                
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl07_li_main" class="nav-item active text-center dropdown"><a href="admissionprocess.aspx?mpgid=44&amp;pgidtrail=47" id="topmenu1_reptrtopmenu_ctl07_atop" class="nav-link" target="_self">
                ADMISSIONS</a>
                
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl08_li_main" class="nav-item active text-center dropdown"><a href="fee-structure.aspx?mpgid=53&amp;pgidtrail=53" id="topmenu1_reptrtopmenu_ctl08_atop" class="nav-link" target="_self">
                FEE STRUCTURE</a>
                
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl09_li_main" class="nav-item active text-center dropdown"><a href="https://onlinetestseriesmadeeasy.in/" id="topmenu1_reptrtopmenu_ctl09_atop" class="nav-link" target="_blank">
                TEST SERIES</a>
                <ul id="topmenu1_reptrtopmenu_ctl09_ulinner" class="dropdown-menu mega-menu">
                    
                    <div id="topmenu1_reptrtopmenu_ctl09_divinnercourse" class="about-hover  cource-hover">
                        <div class="main-hover ">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-xs-12 ">
                                        <div class="main-hover-left">
                                          <div class="row t-series">
	<div class="col-lg-12">
		<h2>
			TEST SERIES (Online/Offline)</h2>
	</div>
	<div class="col-md-6 col-xs-12 menu_box">
		<ul class="row">
			<li class="col-12 col-sm-12 mr-0 mr-sm-3">
				<p>
					Online Test Series</p>
			</li>
			<li class="col-12 col-sm-12 mr-0 mr-sm-3">
				<a href="https://onlinetestseriesmadeeasy.in/barc2023/barc" target="_blank">BARC 2023 Online Test Series<img class="active-gif" src="/Uploads/image/1029imguf_active.gif "></a></li>
			<li>
				<a href="https://onlinetestseriesmadeeasy.in/gate2024/gate" target="_blank">GATE 2024 Online Test Series<img class="active-gif" src="/Uploads/image/1029imguf_active.gif "></a></li>
			<li>
				<a href="https://onlinetestseriesmadeeasy.in/ese2024/ese" target="_blank">ESE 2024 Prelims Online Test Series<img class="active-gif" src="/Uploads/image/1029imguf_active.gif "></a></li>
			<li>
				<a href="https://www.madeeasy.in/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=38&amp;coursetypeid=3" target="_blank">ESE 2023 Mains Online Test Series<img class="active-gif" src="/Uploads/image/1029imguf_active.gif "></a></li>
		</ul>
	</div>
	<div class="col-md-6 col-xs-12 menu_box">
		<ul class="row">
			<li class="col-12 col-sm-12 mr-0 mr-sm-3">
				<p>
					Offline Test Series</p>
			</li>
			<!--<li class="col-12 col-sm-12 mr-0 mr-sm-3">
				<a href="/ese-prelims-classroom-test-series" target="_blank">ESE 2023 Prelims Classroom Test Series<img class="active-gif" src="/Uploads/image/1029imguf_active.gif " /></a></li>-->
			<li class="col-12 col-sm-12 mr-0 mr-sm-3">
				<a href="https://www.madeeasy.in/coursedetail.aspx?mpgid=42&amp;pgidtrail=42&amp;courseid=38&amp;coursetypeid=3" target="_blank">ESE 2023 Mains Offline Test Series<img class="active-gif" src="/Uploads/image/1029imguf_active.gif "></a></li>
		</ul>
	</div>
	<p>
		&nbsp;</p>
</div>
<p>
	&nbsp;</p>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl10_li_main" class="nav-item active text-center dropdown"><a href="achievements.aspx?mpgid=55&amp;pgidtrail=55" id="topmenu1_reptrtopmenu_ctl10_atop" class="nav-link" target="_self">
                OUR RESULTS</a>
                
                
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl11_li_main" class="nav-item text-center dropdown"><a href="javascript:(void)" id="topmenu1_reptrtopmenu_ctl11_atop" class="nav-link" target="_self">
                CENTRES</a>
                
                <ul id="topmenu1_reptrtopmenu_ctl11_centreul" class="dropdown-menu mega-menu center-mm">
                    <div id="topmenu1_reptrtopmenu_ctl11_divcentre" class="about-hover ">
                        <div class="main-hover ">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-xs-12 bg-right">
                                        <div class="main-hover-right">
                                            <ul>
                                                
                                                        <li><a href="/centerhomepage.aspx?mpgid=78&amp;pgidtrail=78&amp;centid=1" id="topmenu1_reptrtopmenu_ctl11_repcentre_ctl00_anchcenter">
                                                            Delhi
                                                        </a></li>
                                                        
                                                        
                                                    
                                                        <li><a href="/centerhomepage.aspx?mpgid=78&amp;pgidtrail=78&amp;centid=4" id="topmenu1_reptrtopmenu_ctl11_repcentre_ctl01_anchcenter">
                                                            Lucknow
                                                        </a></li>
                                                        
                                                        
                                                    
                                                        <li><a href="/centerhomepage.aspx?mpgid=78&amp;pgidtrail=78&amp;centid=5" id="topmenu1_reptrtopmenu_ctl11_repcentre_ctl02_anchcenter">
                                                            Bhopal 
                                                        </a></li>
                                                        
                                                        
                                                    
                                                        <li><a href="/centerhomepage.aspx?mpgid=78&amp;pgidtrail=78&amp;centid=7" id="topmenu1_reptrtopmenu_ctl11_repcentre_ctl03_anchcenter">
                                                            Pune 
                                                        </a></li>
                                                        
                                                        
                                                    
                                                        <li><a href="/centerhomepage.aspx?mpgid=78&amp;pgidtrail=78&amp;centid=8" id="topmenu1_reptrtopmenu_ctl11_repcentre_ctl04_anchcenter">
                                                            Hyderabad 
                                                        </a></li>
                                                        
                                                        
                                                    
                                                        <li><a href="/centerhomepage.aspx?mpgid=78&amp;pgidtrail=78&amp;centid=9" id="topmenu1_reptrtopmenu_ctl11_repcentre_ctl05_anchcenter">
                                                            Bhubaneswar 
                                                        </a></li>
                                                        
                                                        
                                                    
                                                        <li><a href="/centerhomepage.aspx?mpgid=78&amp;pgidtrail=78&amp;centid=10" id="topmenu1_reptrtopmenu_ctl11_repcentre_ctl06_anchcenter">
                                                            Kolkata 
                                                        </a></li>
                                                        
                                                        
                                                    
                                                        <li><a href="/centerhomepage.aspx?mpgid=78&amp;pgidtrail=78&amp;centid=12" id="topmenu1_reptrtopmenu_ctl11_repcentre_ctl07_anchcenter">
                                                            Jaipur
                                                        </a></li>
                                                        
                                                        
                                                    
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </li>
        
            
            
            
            
            
            <li id="topmenu1_reptrtopmenu_ctl12_li_main" class="nav-item active text-center dropdown"><a href="solutions_pdf.aspx?mpgid=117&amp;pgidtrail=117&amp;id=304" id="topmenu1_reptrtopmenu_ctl12_atop" class="nav-link" target="_self">
                FREE DOWNLOADS</a>
                <ul id="topmenu1_reptrtopmenu_ctl12_ulinner" class="dropdown-menu mega-menu">
                    
                    <div id="topmenu1_reptrtopmenu_ctl12_divinnercourse" class="about-hover  cource-hover">
                        <div class="main-hover ">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-xs-12 ">
                                        <div class="main-hover-left">
                                          <div class="row t-series">
	<div class="col-lg-12">
		<h2>
			FREE DOWNLOADS</h2>
	</div>
	<div class="col-md-6 col-xs-12 menu_box">
		<ul class="row">
			<li class="col-12 col-sm-12 mr-0 mr-sm-3">
				<p>
					Current Affairs</p>
			</li>
			<li class="col-12 col-sm-12 mr-0 mr-sm-3">
				<a href="/weekly-current-affairs">Weekly Current Affairs <img class="active-gif" src="/Uploads/image/1029imguf_active.gif "></a></li>
		</ul>
	</div>
	<div class="col-md-6 col-xs-12 menu_box">
		<ul class="row">
			<!--<li class="col-12 col-sm-12 mr-0 mr-sm-3">
				<a href="https://onlinetestseriesmadeeasy.in/ese2020/rpsc" target="_blank">RPSC 2020 Mains Offline Test Series</a></li>--><!--<li class="col-12 col-sm-12 mr-0 mr-sm-3">
				<a href="../coursedetail.aspx?mpgid=42&pgidtrail=42&courseid=45&coursetypeid=3" target="_blank">UPPSC-AE 2019 Offline Test Series<img class="active-gif" src="/Uploads/image/1029imguf_active.gif " /></a></li>-->
		</ul>
	</div>
	<p>
		&nbsp;</p>
</div>
<p>
	&nbsp;</p>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
                
            </li>
        
</ul>
<div class="nav-bot" style="display: none">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 main_manu ">
                <nav class="navbar navbar-toggleable-md">
                <div class="collapse navbar-collapse nav" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        
                    </ul>
                </div>
                 </nav>
            </div>
        </div>
    </div>
</div>
      </div>
    </nav>
</div>
</div>
</div>
</div>
 
<div class="container">
    <div class="col-lg-12  pl-0 pr-0 ese-count">
        <div class="ese sticky">
            <ul>
                
                        
                        
                        <li class="dropdown"><a class="nav-link " href="https://www.madeeasy.in/home/achievement">
                            GATE 2022 Selections</a>
                            <ul class="dropdown-menu mega-menu " style="display: none;">
                                <div class="get1-hover ">
                                    <a href="https://www.madeeasy.in/home/achievement">
                                        <img src="Uploads/Quicklinks/46quicklnk_REVISED-GATE-2022-RESULTBANNER.jpg" id="headerquicklink1_repqucklink_ctl00_img1"></a>
                                    
                                </div>
                            </ul>
                        </li>
                    
                        
                        
                        <li class="dropdown"><a class="nav-link " href="https://www.madeeasy.in/home/achievement">
                            ESE 2022 Selections</a>
                            <ul class="dropdown-menu mega-menu " style="display: none;">
                                <div class="get1-hover ">
                                    <a href="https://www.madeeasy.in/home/achievement">
                                        <img src="Uploads/Quicklinks/299quicklnk_ese2022.jpg" id="headerquicklink1_repqucklink_ctl01_img1"></a>
                                    
                                </div>
                            </ul>
                        </li>
                    
            </ul>
        </div>
    </div>
</div>

</header> */}
     
