import { commonRequest } from "./commonRequest";
import {BASE_URL} from "./base_url";


//register api call
export const empRegister=async(body,headers)=>{
    return commonRequest('POST',`${BASE_URL}/employee/register`,body,headers)
}
//get all employees api
export const getEmployees=async(searchKey)=>{
    return commonRequest('GET',`${BASE_URL}/employee/getEmployees?search=${searchKey}`,"",)
}
//particular employee details
export const viewProfile=async(id)=>{
    return await commonRequest('GET',`${BASE_URL}/employee/viewprofile/${id}`,"")
}

//remove employee details
export const removeEmployee=async(id)=>{
    return await commonRequest('DELETE',`${BASE_URL}/employee/deleteEmployee/${id}`,{})
}

//update
export const updateEmployee=async(id,body,headers)=>{
    return await commonRequest('PUT',`${BASE_URL}/employee/updateEmployee/${id}`,body,headers)
}
