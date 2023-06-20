import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'
import { updateEmployee, viewProfile } from '../services/allApis';
import {axios} from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import { BASE_URL } from '../services/base_url';

function Edit() {

  //to hold image
  const [existingImage, setExistingImage] = useState('')

 const [employeeData,setEmployeeData] = useState({})

//  const [fileInput, setFileInput] = useState(existingImage)
  //get parameter from url
  const {id}=useParams()
  //console.log(id);//id of the employee

  //get details of groupid from server
  const getProfile=async()=>{
    //api call to get particular profile
    const {data}=await viewProfile(id)
    //console.log(data);//details of the profile
    setUserData(data)
    setStatus(data.status)
    // setEmployeeData(data)
    // setEmployeeData(data)
    // setStatus(data.status)
     setExistingImage(data.profile)
  }
  
  console.log(existingImage);
  // console.log(userData);
  //console.log(userData);//details of the employee
  
  //navigate to home page
  const navigate= useNavigate()

  //create state to  hold profile picture
  const [preview,setPreview]=useState("")

  //create state for hold image
  const [image,setImage] =useState("")
  //update state
  const setProfile=(e)=>{
    // console.log(e);
    setImage(e.target.files[0]);
  }
  console.log(image);
  //create state for status
  const [status,setStatus]=useState("Active")
  //to update status
  const updateStatus=(e)=>{
    //console.log(e);//{value: 'Active ', label: 'Active'}
    setStatus(e.value);
  }
  console.log(status)//Active

  //create a state to hold user input data
  const [userData,setUserData] = useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    gender:"",
    location:"",
  })
 

  //update user data when user enter the input using html
  const userDetails=(e)=>{
    console.log(e); //SyntheticBaseEvent{....}
    const {name,value}=e.target
    setUserData({...userData,[name]:value})//{fname: 'Anu'}
    
  }
  console.log(userData)

  useEffect(()=>{
    getProfile()
  },[id])

  useEffect(()=>{
    if(image){
      setPreview(URL.createObjectURL(image))
    }
 
  },[image])

  const options = [
    { value: 'Active ', label: 'Active' },
    { value: 'InActive', label: 'InActive' }
 
  ]

  const handleSubmit =async(e)=>{
    e.preventDefault()//prevent the event to stop the reloading

    //get user input data from the form
    const {fname,lname,email,mobile,gender,location} = userData

    if(fname==""){
     toast.warning("Please enter first name",{
      className: 'toast-message'
     })
    }

   else if(lname==""){
      toast.warning("Please enter last name",{
       className: 'toast-message'
      })
     }
   else  if(email==""){
      toast.warning("Please enter email name",{
       className: 'toast-message'
      })
     }
    else if(mobile==""){
      toast.warning("Please enter mobile name",{
       className: 'toast-message'
      })
     }
    else if(gender==""){
      toast.warning("Please enter gender name",{
       className: 'toast-message'
      })
     }
   else  if(location==""){
      toast.warning("Please enter location name",{
       className: 'toast-message'
      })
     }
     else{
      //make api register call

      //header config
      const headerConfig={
          "Content-Type": "multipart/form-data"
      }
      //body - form data
      const data= new FormData()
      data.append("user_profile",image)
      data.append("fname",fname)
        data.append("lname",lname)  
        data.append("email",email)  
        data.append("mobile",mobile)
        data.append("gender",gender)
        data.append("status",status)
        data.append("location",location)
//api call

const response = await updateEmployee(id,data,headerConfig)
if (response.status === 200) {
  navigate('/')
}
else{
  console.log('error');
}
// const response = await put(`${BASE_URL}/update/${id}`, data, headerConfig);
// console.log(response);
// Check if the update was successful
// if (response.status === 200) {
//   toast.success("Profile updated successfully", {
//     className: 'toast-message2'
//   });
//      //navigate to the home page
//      navigate('/')
// } else {
//   toast.error("Failed to update profile", {
//     className: 'toast-message'
//   });
// }
      

//const response = await empRegister(data,headerConfig)
        // console.log(response);
        //navigate to the home page
        // navigate('/')
      // toast.success("Registered successfully" ,{
      //   className: 'toast-message2'
      // })
      
     }
  }

  return (
    <div>
      <div className='container my-5'>
        <h1 className='text-center'>Employee Register Details</h1>
        <Card className='shadow'>
          <div className='text-center m-3'>
            <img className='rounded-circle' style={{ width: '50px', height: '50px' }}
             src={preview?preview:
          `${BASE_URL}/uploads/${existingImage}`
             } />
          </div>
          <Form className='m-3'>
            <Row>

              <Form.Group className='col-lg-6'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter first name'
                  name='fname'
                  onChange={userDetails}
                  // value={employeeData.fname}
                />
              </Form.Group>

              <Form.Group className='col-lg-6'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter Last name'
                  name='lname'
                  onChange={userDetails}
                  //value={employeeData.lname}
                />
              </Form.Group>

              <Form.Group className='col-lg-6'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter Email Address'
                  name='email'
                  onChange={userDetails}
                  //value={employeeData.email}
                />
              </Form.Group>

              <Form.Group className='col-lg-6'>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter Mobile Number'
                  name='mobile'
                  onChange={userDetails}
                  //value={employeeData.mobile}
                />
              </Form.Group>
 {/* radioButton */}
              <Form.Group className='col-lg-6'>
                <Form.Label>Gender</Form.Label>
                <Form.Check
                  type={'radio'}
                  label={'Male'}
                  name='gender'
                  value={'Male'}
                  checked={userData.gender==='Male'?true:false}
                  onChange={userDetails}
                />
                 <Form.Check
                  type={'radio'}
                  label={'Female'}
                  name='gender'
                  value={'Female'}
                  checked={userData.gender==='Female'?true:false}
                  onChange={userDetails}
                />
                 <Form.Check
                  type={'radio'}
                  label={'Other'}
                  name='gender'
                  value={'Other'}
                  onChange={userDetails}
                />
              </Form.Group>
{/* select */}
              <Form.Group className='col-lg-6'>
                <Form.Label>Select Employee status</Form.Label>
                <Select options={options} onChange={updateStatus} 
                defaultInputValue={status}
                />
              </Form.Group>
{/* upload photo */}
              <Form.Group className='col-lg-6'>
                <Form.Label>Choose a Profile photo</Form.Label>
                <Form.Control
                name="profile"
                required
                type='file'
                onChange={setProfile}
                // defaultValue={fileInput}
                />
              </Form.Group>
  {/* location */}
              <Form.Group className='col-lg-6'>
                <Form.Label>Location</Form.Label>
                <Form.Control 
                required
                type='text'
                placeholder='Employee location'
                name='location'
                onChange={userDetails}
                />
              </Form.Group>
  {/* submit button */}

          <Button onClick={handleSubmit} className='my-3'>Submit</Button>

            </Row>
          </Form>
        </Card>
      </div>
      <ToastContainer 
      position="top-center"
     type="error"
      />
    </div>
  )
}

export default Edit