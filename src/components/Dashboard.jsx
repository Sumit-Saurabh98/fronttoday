import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Heading } from '@chakra-ui/react';

function Dashboard(props) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://thankful-wasp-waistcoat.cyclic.app/employee")
      .then(res => setEmployees(res.data.employee));
  }, []);

  const handleDelete = (employeeId) => {
    axios.delete(`https://thankful-wasp-waistcoat.cyclic.app/employee/delete/${employeeId}`)
      .then(() => {
        // Remove the deleted employee from the state
        const updatedEmployees = employees.filter(employee => employee._id !== employeeId);
        setEmployees(updatedEmployees);
      })
      .catch(error => {
        console.error("Error deleting employee:", error);
        // Handle the error, e.g., show an error message to the user
      });
  };

  return (
    <div>
      <Heading>Employee Management Software</Heading>
      <div style={{ marginBottom: "50px" }}>
        <Button colorScheme='teal' variant='solid'>Add Employee Data </Button>
        <Button colorScheme='teal' variant='outline'>Logout</Button>
      </div>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>S NO.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>{Date.now()}</td>
              <td>
                <Button colorScheme='teal' variant='outline'>Edit</Button>
                &nbsp;&nbsp;&nbsp;
                <Button onClick={() => handleDelete(employee._id)} colorScheme='teal' variant='outline'>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
