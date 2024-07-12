// import useState, { useEffect } from 'react';
import './App.css';
import EmpData from './components/EmpData';
import Home from './components/Home';
import Empdetail from './components/Empdetail';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Selectedemp from './components/Selectedemp';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/data" element={<EmpData/>}/>
        <Route path="/empdetail" element={<Empdetail/>}/>
        <Route path="/selected" element={<Selectedemp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
