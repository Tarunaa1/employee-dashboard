import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Employee Dashboard</h1>
        <p>Welcome to the Employee Dashboard. This portal allows you to manage and view employee data with ease.</p>
      </header>

      <section className="instructions">
        <h2>How to Use This Dashboard</h2>
        <p>Follow these steps to navigate and utilize the functionalities of this dashboard:</p>
        <ol style={{listStyleType:'none'}}>
          <li><strong>Search Employee:</strong> Use the search bar at the top to find an employee by their ID. Simply enter the employee ID and click the "Search" button.</li>
          <li><strong>View Employee List:</strong> The dashboard displays a list of employee cards. Each card contains key information about an employee.</li>
          <li><strong>Employee Details:</strong> Click on any employee card to view detailed information about that employee on a new page.</li>
          <li><strong>Edit Employee:</strong> Each card has an "Edit" button. While the editing functionality is for display purposes only, you can imagine using this button to update employee details.</li>
          <li><strong>Delete Employee:</strong> Each card also has a "Delete" button. Clicking this will remove the employee from the dashboard view. Note: This does not delete the employee from the database.</li>
          <li><strong>Multi-Select and Delete:</strong> Select multiple employee cards and use the delete functionality to remove them from the dashboard view.</li>
        </ol>
      </section>
      <a href='/data' style={{border: 'none', padding:'10px', borderRadius:'5px', backgroundImage:'linear-gradient(to right, lightblue,70%, lightgreen)',color:'black',textDecoration:'none'}}>View Employee List</a>
      
    </div>
  );
}

export default Home;
