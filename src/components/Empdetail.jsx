import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Empdetail() {
    const location = useLocation();
    const { detail } = location.state || {};
    console.log(detail)
    if (!detail) {
        return <p>No employee detail found.</p>;
    }

    const { id, employee_name, employee_salary, employee_age } = detail;
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px', maxWidth:'600px',margin:'20px auto', borderRadius:'10px', padding:'20px'}}>
        <h2>Employee Detail</h2>
            <p>ID: {id}</p>
            <p>Name: {employee_name}</p>
            <p>Salary: {employee_salary}</p>
            <p>Age: {employee_age}</p>
            <a href='/data' style={{border: 'none', paddingTop:'5px',paddingBottom:'5px', borderRadius:'5px', backgroundImage:'linear-gradient(to right, lightblue,70%, lightgreen)',color:'black',textDecoration:'none',paddingLeft:'20px', paddingRight:'20px'}}>Back</a>
    </div>
  )
}
