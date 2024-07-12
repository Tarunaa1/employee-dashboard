import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';

export default function Selectedemp() {
    const location = useLocation();
    const { selectedCards: initialSelectedCards } = location.state || { selectedCards: [] };
    const [selectedCards, setSelectedCards] = useState(initialSelectedCards);

    const remove = (index) => {
        setSelectedCards(prevSelectedCards =>
            prevSelectedCards.filter((_, i) => i !== index)
        );
    };
    return (
        <div style={{margin:'auto', maxWidth:'600px'}}>
            <h2>Selected Employees</h2>
            {selectedCards.length > 0 ? (
                selectedCards.map((d, i) => (
                    <div key={i} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                        <h3>{d.employee_name}</h3>
                        <p>Salary: {d.employee_salary}</p>
                        <p>Age: {d.employee_age}</p>
                        <p onClick={()=>remove(i)} style={{color:"Red", cursor:'pointer'}}>Remove</p>
                    </div>
                ))
            ) : (
                <p>No Selected Employees</p>
            )}
        </div>
    );
}
