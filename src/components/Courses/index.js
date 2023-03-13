import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';


const Courses = () => {
  return (
    <>
      <div className='course-page'>
        <h1 className="heading">Courses</h1>
        <p className="para">You will find all the details of courses provided by AAYAM here. Just have a look and choose the best suited course for you.</p>
      </div>
      <div className="course-info">
        <h1 className="title-style">NEET UG</h1>
        <p className="course_description">NEET UG is a national level medical entrance examination conducted by NTA (National Testing Agency) for admission to MBBS. BDS, BHMS and AYUSH courses. NEET</p>
      </div>


      <div className="course-containers">
      
      {/* <Link to="/foundationoneneet"> */}
        <div className="course-cards">
          <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/thumbnail_neet_ug_268c7efb50.jpg" className="course-card-img"/>
          <h1 className='head'>Foundation-1</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student from the...</p>
          <Link to="/foundationoneneet">
          <button type="button" className='button btn btn-primary'>View Details</button>
          </Link>
        </div>
      

        <div className="course-cards">
          <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/course_a2_8ffd2487a7.png" className="course-card-img"/>
          <h1 className='head'>Foundation-2</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student...</p>
          <Link to="/foundationtwoneet">
            <button type="button" className='button btn btn-primary'>View Details</button>
         </Link> 
       </div>
      
        <div className="course-cards">
          <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/thumbnail_neet_ug_268c7efb50.jpg" className="course-card-img"/>
          <h1 className='head'>Target Course</h1>
          <p className="para-course">Target course determines one year dedicated preparation for the NEET. The best faculty team of MBBS Doctors keeps the students motivated towards the...</p>
          <Link to="/targetcourseneet">
            <button type="button" className='button btn btn-primary'>View Details</button>
          </Link>
        </div>
    
    </div>
      

      
      <div className="course-info">
        <h1 className="title-style">JEE Mains</h1>
        <p className="course_description">NEET UG is a national level medical entrance examination conducted by NTA (National Testing Agency) for admission to MBBS. BDS, BHMS and AYUSH courses. NEET</p>
      </div>


      <div className="course-containers">
        <div className="course-cards">
        <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/iit_1c5db534ba.png" className="course-card-img"/>
          <h1 className='head'>Foundation-1</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student from the...</p>
          <button type="button" className='button btn btn-primary'>View Details</button>
        </div>
        <div className="course-cards">
        <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/iit_1c5db534ba.png" className="course-card-img"/>
          <h1 className='head'>Foundation-2</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student...</p>
          <button type="button" className='button btn btn-primary'>View Details</button>
        </div>
        <div className="course-cards">
        <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/thumbnail_neet_ug_268c7efb50.jpg" className="course-card-img"/>
          <h1 className='head'>Target Course</h1>
          <p className="para-course">Target course determines one year dedicated preparation for the NEET. The best faculty team of MBBS Doctors keeps the students motivated towards the...</p>
          <button type="button" className='button btn btn-primary'>View Details</button>
        </div>
      </div>


      <div className="course-info">
        <h1 className="title-style">JEE Mains & Advance</h1>
        <p className="course_description">NEET UG is a national level medical entrance examination conducted by NTA (National Testing Agency) for admission to MBBS. BDS, BHMS and AYUSH courses. NEET</p>
      </div>


      <div className="course-containers">
        <div className="course-cards">
        <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/iit_1c5db534ba.png" className="course-card-img"/>
          <h1 className='head'>Foundation-1</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student from the...</p>
          <button type="button" className='button btn btn-primary'>View Details</button>
        </div>
        <div className="course-cards">
        <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/iit_1c5db534ba.png" className="course-card-img"/>
          <h1 className='head'>Foundation-2</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student...</p>
          <button type="button" className='button btn btn-primary'>View Details</button>
        </div>
        <div className="course-cards">
        <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/iit_1c5db534ba.png" className="course-card-img"/>
          <h1 className='head'>Target Course</h1>
          <p className="para-course">Target course determines one year dedicated preparation for the NEET. The best faculty team of MBBS Doctors keeps the students motivated towards the...</p>
          <button type="button" className='button btn btn-primary'>View Details</button>
        </div>
      </div>


      <div className="course-info">
        <h1 className="title-style">Distance Course</h1>
        <p className="course_description">NEET UG is a national level medical entrance examination conducted by NTA (National Testing Agency) for admission to MBBS. BDS, BHMS and AYUSH courses. NEET</p>
      </div>
      <div className="course-iTab-container">
        <img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/thumbnail_neet_ug_268c7efb50.jpg" className="course-card-img"/>
        <div className="card-iTab">
          <h1 className='head'>i-Tab</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student from the...</p>
          <button type="button" className='button btn btn-primary'>View Details</button>
        </div>
        </div>



      

    </>
  )
}

export default Courses;
