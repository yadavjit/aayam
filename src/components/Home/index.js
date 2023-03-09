import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Notifications from '../Notifications';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import "./index.css"



const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://portal.aayamcareerinstitute.com/uploads/results_1_9db934f2f3.PNG"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://portal.aayamcareerinstitute.com/uploads/0006_baf2b8916b.png"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://portal.aayamcareerinstitute.com/uploads/004_5924ee80b5.png"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

    <Notifications/>

    
<div>
    <h1>Courses</h1>
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/thumbnail_neet_ug_268c7efb50.jpg" />
      <Card.Body>
        <Card.Title>NEET UG</Card.Title>
        <Card.Text>
        NEET UG is a national level medical entrance examination conducted by NTA (National Testing Agency) for..
        </Card.Text>
        <Link to="/courses"><Button variant="primary">View Details</Button></Link>
      </Card.Body>
    </Card>
    </div>

    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/thumbnail_iit_1c5db534ba.png" />
      <Card.Body>
        <Card.Title>JEE Mains</Card.Title>
        <Card.Text>
        The Joint Entrance Examination (JEE) is an engineering entrance assessment conducted for admission to various engineering colleges in India. It is constituted by two different examinations: the JEE Main and the JEE Advanced..
        </Card.Text>
        <Link to="/courses"><Button variant="primary">View Details</Button></Link>
      </Card.Body>
    </Card>
    </div>

    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/thumbnail_iit_1c5db534ba.png" />
      <Card.Body>
        <Card.Title>JEE Mains & Advance</Card.Title>
        <Card.Text>
        The Joint Entrance Examination (JEE) is an engineering entrance assessment conducted for admission to various..
        </Card.Text>
        <Link to="/courses"><Button variant="primary">View Details</Button></Link>
      </Card.Body>
    </Card>
    </div>
</div>

<div>
        <h1>Distance Courses</h1>
        <p>Distance courses are provided to those students who are not able to join ambitious classroom courses and wanted to take benefit of best teaching methodology of AAYAM. These courses help the students in many ways according to the need.</p>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://portal.aayamcareerinstitute.com/uploads/thumbnail_i_tab_423f2a7e07.jpg" />
        <Card.Body>
            <Card.Title>i-Tab</Card.Title>
            <Card.Text>
            Distance courses are provided to those students who are not able to join ambitious classroom courses..
            </Card.Text>
            <Link to="/courses"><Button variant="primary">View Details</Button></Link>
        </Card.Body>
        </Card>
    </div>

    <div>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/lx79TwtHs9E?rel=0"
        allowfullscreen
      ></iframe>
    </div>
    <div>
        <h1>About us and our live Classes</h1>
        <p>AAYAM is the fastest growing institute of central India with highest percentage of selection in NEET & JEE.
AAYAM is blessed with large pool of faculty team of MBBS doctors and IITians to transform the dreams of young talents into the reality. Our determined, dedicated and hard working team is constantly working to excel the preparation of the students and helping them to create good ranks and achieve success.</p>
    </div>
    </div>
</div>

<div className="footer-style">
<Footer/>
</div>



  


    </>
  )
}

export default Home;
