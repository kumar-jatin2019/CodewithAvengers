import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getEmployeeList } from '../../Actions/postAction';



const Employe = () => {
    const dispatch = useDispatch()
    let employ = useSelector((state) => state.EmployeModule.employees);
    console.log(employ, "emloyee List");

    useEffect(() => {
        dispatch(getEmployeeList());
    }, [])

    if (employ && employ.length == 0) {
        return <h1>loading..</h1>;
    }

    return (
        <div>
             
             <h2>Employeee Data</h2>
            <div className='row'>
                  

                {employ.map((item, index) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={index}>
                        <div className="card shadow text-center py-4">

                            <div className="card-body">
                                <h5 className="card-title mb-0">{item.employee_name}</h5>

                                <p className="text-muted small mt-2">{item.employee_salary}</p>


                                <button className="btn btn-primary" >
                                View Student
                                   
                                </button>
                            </div>
                        </div>
                    </div>))}


            </div>

        </div>
    )
}

export default Employe
