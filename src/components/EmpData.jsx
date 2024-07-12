import React, { useEffect, useState } from 'react';
import EmpCard from './EmpCard';
import { useNavigate } from 'react-router-dom';

export default function EmpData() {
    const api = "https://dummy.restapiexample.com/api/v1/employees";
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchval, setSearchval] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedCards, setSelectedCards] = useState([]);
    const navigate = useNavigate();

    const fetchData = async (url, retries = 3) => {
        try {
            const json = await fetch(url).then((res) => res.json());
            if (json.status === 'success' && Array.isArray(json.data)) {
                setData(json.data);
                setFilteredData(json.data); 
            } else {
                console.error('Unexpected response format:', json);
                setData([]);
                setFilteredData([]);
            }
        } catch (error) {
            if(retries >0){
                console.log(`Retrying... (${retries} attempts left)`);
                fetchData(url, retries - 1);
            }
            console.log(error);
        } finally {
            setLoading(false); 
        }
    };

    const handleSearchChange = (e) => {
        setSearchval(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchval === '') {
            setFilteredData(data);
        } else {
            const filtered = data.filter((d) => d.id.toString() === searchval);
            setFilteredData(filtered);
        }
    };

    const handleCardSelect = (card) => {
        setSelectedCards((prevSelectedCards) => {
            if (prevSelectedCards.some(selected => selected.id === card.id)) {
                return prevSelectedCards.filter(selected => selected.id !== card.id);
            } else {
                return [...prevSelectedCards, card];
            }
        });
    };

    const handleViewSelected = () => {
        navigate('/selected', { state: { selectedCards } });
    };

    const remove = (id) => {
        setFilteredData(prevFilteredData =>
            prevFilteredData.filter(d => d.id !== id)
        );
        setSelectedCards(prevSelectedCards =>
            prevSelectedCards.filter(card => card.id !== id)
        );
    };

    useEffect(() => {
        fetchData(api);
    }, []);

    return (
        <div style={{maxWidth:'600px', textAlign:'center', margin:'auto'}}>
            <h1>Employee List</h1>
            <form onSubmit={handleSearchSubmit} style={{display:'flex', justifyContent:'space-evenly'}}>
                <input
                    type="text"
                    value={searchval}
                    onChange={handleSearchChange}
                    placeholder="Search by ID"
                />
                <button type="submit">Search</button>
                <button type="button" onClick={handleViewSelected}>View Selected Cards</button>
            </form>
            
            {loading ? ( 
                <p>Loading...</p>
            ) : (
                filteredData.length > 0 ? (
                    filteredData.map((d, i) => (
                        <EmpCard
                            key={i}
                            id={d.id}
                            name={d.employee_name}
                            salary={d.employee_salary}
                            age={d.employee_age}
                            toparent={handleCardSelect}
                            toremove={remove}
                            selected={selectedCards.some(card => card.id === d.id)}
                        />
                    ))
                ) : (
                    <p>No data</p>
                )
            )}
        </div>
    );
}
