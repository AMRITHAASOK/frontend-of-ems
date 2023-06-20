import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { viewProfile } from '../services/allApis';
import { BASE_URL } from '../services/base_url';


function ViewProfile() {

  //create a state to hold particular employee details
  const [employeeDetails,setEmployeeDetails]=useState({})

  //useparams hook is used to get path parameters of route
  const {id}= useParams()
  console.log(id);//64899cd7041af8fb510f7f58

    const getProfile =async()=>{
    const {data}= await viewProfile(id)
     console.log(data); 
     setEmployeeDetails(data)
    }
    console.log(employeeDetails);//details
    useEffect(()=>{
      getProfile()
    },[])
  return (
    <div>
      <div className='container'>
        <Card className='m-5 shadow'>
            <Card.Body>
              <Row>
                <div className='col'>
                  <div className='profile-image d-flex justify-content-center'>
                    <img width={'100px'}
                     src= {`${BASE_URL}/uploads/${employeeDetails.profile}`}/>
                  </div>
                </div>
              </Row>

              <div className='text-center '>
                <h3 className='fw-bolder mt-2'> {employeeDetails.fname} &nbsp; {employeeDetails.lname}</h3>
                <h5><i class="me-2 fa-solid fa-envelope"></i>{employeeDetails.email}</h5>
                <h5><i class="text-dark me-2 fa-solid fa-mobile"></i>{employeeDetails.mobile}</h5>
                {/* <h5> <i class="text-danger me-2 fa-solid fa-venus-mars"></i> {employeeDetails.gender}</h5> */}
                <h5><i class="text-success me-2 fa-solid fa-location-dot"></i> {employeeDetails.location}</h5>
                <h5> <i class="text-warning me-2 fa-solid fa-chart-line"></i> {employeeDetails.status}</h5>
              </div>
            </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ViewProfile