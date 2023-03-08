import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <>
      <div className='course'>
        <h1 className="heading">Courses</h1>
        <p className="para">You will find all the details of courses provided by AAYAM here. Just have a look and choose the best suited course for you.</p>
      </div>
      <div className="course-container">
        <h1 className="course_heading">NEET UG</h1>
        <p className="course_description">NEET UG is a national level medical entrance examination conducted by NTA (National Testing Agency) for admission to MBBS. BDS, BHMS and AYUSH courses. NEET</p>
      </div>


      <div className="course-card">
      <div>
      <Link to="/foundationoneneet">
        <div className="card">
          <h1 className='head'>Foundation-1</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student from the...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
      </Link>
      </div>

      <div>
      <Link to="/foundationtwoneet">
        <div className="card">
          <h1 className='head'>Foundation-2</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
      </Link>
      </div>


      <div>
      <Link to="/targetcourseneet">
        <div className="card">
          <h1 className='head'>Target Course</h1>
          <p className="para-course">Target course determines one year dedicated preparation for the NEET. The best faculty team of MBBS Doctors keeps the students motivated towards the...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
      </Link>
      </div>
    </div>
      

      
      <div className="course-container">
        <h1 className="course_heading">JEE Mains</h1>
        <p className="course_description">NEET UG is a national level medical entrance examination conducted by NTA (National Testing Agency) for admission to MBBS. BDS, BHMS and AYUSH courses. NEET</p>
      </div>


      <div className="course-card">
        <div className="card">
          <h1 className='head'>Foundation-1</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student from the...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
        <div className="card">
          <h1 className='head'>Foundation-2</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
        <div className="card">
          <h1 className='head'>Target Course</h1>
          <p className="para-course">Target course determines one year dedicated preparation for the NEET. The best faculty team of MBBS Doctors keeps the students motivated towards the...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
      </div>


      <div className="course-container">
        <h1 className="course_heading">JEE Mains & Advance</h1>
        <p className="course_description">NEET UG is a national level medical entrance examination conducted by NTA (National Testing Agency) for admission to MBBS. BDS, BHMS and AYUSH courses. NEET</p>
      </div>


      <div className="course-card">
        <div className="card">
          <h1 className='head'>Foundation-1</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student from the...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
        <div className="card">
          <h1 className='head'>Foundation-2</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
        <div className="card">
          <h1 className='head'>Target Course</h1>
          <p className="para-course">Target course determines one year dedicated preparation for the NEET. The best faculty team of MBBS Doctors keeps the students motivated towards the...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
      </div>


      <div className="course-container">
        <h1 className="course_heading">Distance Course</h1>
        <p className="course_description">NEET UG is a national level medical entrance examination conducted by NTA (National Testing Agency) for admission to MBBS. BDS, BHMS and AYUSH courses. NEET</p>
      </div>
      <div className="course-card">
        <div className="card">
          <h1 className='head'>i-Tab</h1>
          <p className="para-course">Two year course leads building up of student’s basic and creating a wonderful foundation to get success in the NEET. This course differentiate the student from the...</p>
          <button type="button" className=' btn btn-primary'>View Details</button>
        </div>
        </div>



      

    </>
  )
}

export default Courses;
