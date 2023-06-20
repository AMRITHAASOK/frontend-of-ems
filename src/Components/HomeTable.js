import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown'
import './HomeTable.css'
import {Link} from 'react-router-dom'
import {BASE_URL} from '../services/base_url'

function HomeTable({displayData,handleDelete}) {
    console.log(displayData);
  return (
    <div className='container mt-3'>
       <Row>
            <div className='col'>
                <Card className='align-items-center shadow mb-5'  responsive='sm'>
                    <Table className='p-3' >
                        <thead>
                            <tr>
                                <th>Reg.No</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Status</th>
                                <th>Profile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

               { displayData.length > 0? displayData.map((item,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{item.fname}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>
                    <Dropdown>
                        <Dropdown.Toggle variant={item.status==="Active"?"success":"danger"} id="dropdown-status">
                          {item.status}
                        </Dropdown.Toggle>  
                    </Dropdown>
                    </td>
                    <td>
                <img className='rounded-circle' 
                style={{width:'50px',height:'50px'}} 
                src={`${BASE_URL}/uploads/${item.profile}`}/>
                    </td>
                    <td>
                    <Dropdown>
                        <Dropdown.Toggle>
                            <i className='fa-solid fa-ellipsis-vertical'></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                            <Dropdown.Item>
                                <Link to={`/view-profile/${item._id}`}  style={{textDecoration:'none'}}>
                                <div className='link'>
                                <i class=" text-success fa-solid fa-street-view fa-bounce mx-2"></i>
                                <span className='text-success fw-bolder'>View</span> 
                                </div>
                                </Link>
                            </Dropdown.Item> 

                            <Dropdown.Item>
                                <Link to={`/edit/${item._id}`}  style={{textDecoration:'none'}} >
                            <div className='link'>  
                            <i class="text-primary fa-solid fa-user-pen fa-beat mx-2"></i>
                            <span className='text-primary fw-bolder'>Edit</span> 
                            </div>
                            </Link>
                            </Dropdown.Item> 

                            <Dropdown.Item onClick={()=>handleDelete(item._id)}>
                            <div className='link'>   
                            <i class="text-danger fa-solid fa-trash fa-beat-fade mx-2"></i>
                            <span className='text-danger fw-bolder'>Delete</span> 
                            </div>
                            </Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                    </td>
                </tr>
               )):
               <tr>Sorry nothing to display</tr>
               
               }
                        </tbody>
                    </Table>
                </Card>
            </div>
        </Row> 
    </div>
  )
}

export default HomeTable