import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Axios } from 'axios';

function Dashboard(props) {

    const [employee, setEmployee]  = useState([])

    useEffect(() => {
        axios.get("https://thankful-wasp-waistcoat.cyclic.app/employee").then(res=>setEmployee(res.data.employee));
    },[])

    return (
        <div>
            <h1>backend completed. i did't get time for frontend</h1>
             {
             employee && employee.map((employee, i) =>{
                            return <div>
                                <h2>{employee.firstName}</h2>
                                <h2>{employee.lastName}</h2>
                                <h2>{employee.email}</h2>
                                <h2>{employee.department}</h2>
                                <h2>{employee.salary}</h2>
                                <button>edit</button>
                                <button>delete</button>
                            </div>

                        })
                    }
        </div>
    );
}

export default Dashboard;