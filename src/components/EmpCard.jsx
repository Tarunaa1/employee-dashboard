import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmpCard({ id, name, salary, age, toparent, selected, toremove }) {
    const navigate = useNavigate();

    const selectFunction = (e) => {
        e.stopPropagation();
        const data = {
            id,
            employee_name: name,
            employee_salary: salary,
            employee_age: age,
        };
        toparent(data);
    };

    const remove = (e) => {
        e.stopPropagation();
        toremove(id);
    };

    const empDetail = () => {
        const detail = {
            id,
            employee_name: name,
            employee_salary: salary,
            employee_age: age,
        };
        navigate('/empdetail', { state: { detail } });
    };

    return (
        <div onClick={empDetail} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <button onClick={selectFunction} style={{border: 'none', padding:'5px 25px', margin:'0px',borderRadius:'5px', backgroundImage:'linear-gradient(to right, lightblue,70%, lightgreen)',color:'black',textDecoration:'none',height:'30px'}}>Select</button>
                <p onClick={remove} style={{ color: "red", cursor: 'pointer',margin:'0px'}}>Remove</p>
                <p onClick={remove} style={{ color: "blue", cursor: 'pointer',margin:'0px' }}>Edit</p>
                <button onClick={empDetail} style={{border: 'none', padding:'5px 25px', margin:'0px',borderRadius:'5px', backgroundImage:'linear-gradient(to right, lightblue,70%, lightgreen)',color:'black',textDecoration:'none',height:'30px'}}>View</button>
            </div>
            {selected && <p style={{ color: 'green' }}>Selected!!</p>}
        </div>
    );
}
