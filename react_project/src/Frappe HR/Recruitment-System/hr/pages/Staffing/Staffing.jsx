import {useEffect,useState} from "react";

import StaffingForm from "../../../components/Forms/StaffingForm";

import StaffingTable from "../../../components/Tables/StaffingTable";

import{

getStaffing,
createStaffing,
deleteStaffing

}

from "../../../apis/staffingApi.js";

import "./Staffing.css";

function Staffing(){

const[data,setData]=useState([]);

useEffect(()=>{

load();

},[]);

const load=async()=>{

const res=await getStaffing();

setData(res.data);

}

const add=async(form)=>{

await createStaffing(form);

load();

}

const remove=async(id)=>{

await deleteStaffing(id);

load();

}

return(

<div className="page">

<h2>

Staffing Plans

</h2>

<StaffingForm

onSubmit={add}

/>

<StaffingTable

data={data}

onDelete={remove}

onEdit={()=>{}}

/>

</div>

)

}

export default Staffing;