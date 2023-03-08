import React from 'react'
import "./index.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Badge } from 'react-bootstrap';

// import Sonnet from '../../components/Sonnet';


const Notifications = () => {
  return (
    <>
        <Tabs
      defaultActiveKey="notifications"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="notifications" title="Notifications">
      <h1>Comming Sooon <Badge bg="secondary">New</Badge></h1> 
      </Tab>
      
      <Tab eventKey="newcourses" title="New Courses">
      <h1>Comming Sooon.</h1>  
      </Tab>
      
      <Tab eventKey="results" title="Results">
      <h1>Comming Sooon..</h1>  
      </Tab>
    </Tabs>
    </>
  )
}

export default Notifications;
    {/* <button>Notifications</button>
    <div>
        <ul className='notice-list'>
        <li >
        <p>YGSO Registrations open now</p>
        </li>
        <li>
        <p>AAYAM launched YOung Genius Science Olympiad for students of class 9th, 10th, 11th and 12th</p>
        </li>
        </ul>
    </div> */}
    

    
    {/* <ul class="nav nav-tabs" style={{paddingTop: '10px'}}>

    <li class="active"><a data-toggle="tab" href="#notification" aria-expanded="true"><strong> Notification</strong></a> </li>

    <li class=""><a data-toggle="tab" href="#course" aria-expanded="false"><strong> New Courses</strong></a> </li>

    <li class=""><a data-toggle="tab" href="#result" aria-expanded="false"><strong>Results</strong> <img src="/images/new_icon_blink.gif" width="22" height="9"/></a> </li>


    </ul> */}
    
      
//     </>
//   )
// }

// export default Notifications;
