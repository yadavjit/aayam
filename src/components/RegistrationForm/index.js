import { Dropdown } from 'bootstrap';
import React from 'react'
import { useState } from 'react';
//import "./index.css";

const RegistrationForm = () => {
  const[studentName,setStudentName]=useState();
  const[mobileNo,setMobileNo]=useState();
  const[fatherMobileNo,setFatherMobileNo]=useState();
  const[className,setClassName]=useState();
  const[schoolName,setSchoolName]=useState();
  const[cityName,setCityName]=useState();
  const[districtName,setDistrictName]=useState();
  const[comeToKnow,setComeToKnow]=useState();
  const[coupenCode,setCoupenCode]=useState();


  const onRegistration = event => {
    event.preventDefault()
   // const {titleInput, dateInput} = this.state
   // const formattedDate = dateInput
    //  ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      //: ''
//       const orderDetailing=
//         {
//           productName:productName,
//           productCode:productCode,
//           orderDate:orderDate,
//           returnDate:returnDate,
//           productPrice:productPrice,
//           paidAmount:paidAmount,
//           remainingAmount:productPrice-paidAmount,
//           remark:remark
//         }
//         const fullDetails=orderDetailing.map((each)=>{
//           return(
//             <div className="card">
//               <p className="name">{each.productName}</p>
//               <p className="code">{each.productCode}</p>
//               <p className="order-date">{each.orderDate}</p>
//             </div>
//           )
//         })
      
//     //this.setState(prevState => ({
//       //appointmentsList: [...prevState.appointmentsList, newAppointment],
//       //titleInput: '',
//       //dateInput: '',
//    // }))
//  // }
 return(
  <h1>Done</h1>
  )}

  return (
    <>
     
     <div className="registraion">
     <h1>Registration for YGSO</h1>
     <p>Young Genius Science Olympiad</p>
     </div>
     
        <form className="registration_form" onSubmit={onRegistration} > 
          <input type="text" placeholder='Student Name' className='product_name' onChange={(event)=>setStudentName(event.target.value)}/>

          <input type="text" placeholder="Mobile No" className="product_code" onChange={(event)=>setMobileNo(event.target.value)}/>
          <h1 className="alert">{alert}</h1>
          <input type="text" placeholder="Father's Mobile No" className="order_date" onChange={(event)=>setFatherMobileNo(event.target.value)}/>
          <input type="text" placeholder="Select Class" className="return_date" onChange={(event)=>setClassName(event.target.value)}/>
          <input type="text" placeholder="School Name" className="product_price" onChange={(event)=>setSchoolName(event.target.value)}/>
          <input type="text" placeholder="City" className="paid_amount" onChange={(event)=>setCityName(event.target.value)}/>
          <input type="text" placeholder="District" className="remaining_amount" onChange={(event)=>setDistrictName(event.target.value)}/>
          <input type="text" placeholder="How do you come to know Aayam" className="remark" onChange={(event)=>setComeToKnow(event.target.value)}/>
          <input type="text" placeholder="Coupen code" onChange={(event)=>setCoupenCode(event.target.value)}/>
          <button type="submit" className="register-btn">
                    Register Now
          </button>

          </form>
          
      
     
    </>
  )
}

export default RegistrationForm;
