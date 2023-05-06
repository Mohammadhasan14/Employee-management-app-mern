import React, { useState } from 'react'
import GoBack from '../AddEmployees/GoBack'
import axios from 'axios'

export default function DashboardAdd() {

    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        project: "",
        status: "",
        phoneNo: ""

    })

    function handleChange(e) {
        console.log(e)
        const { name, value } = e.target;
        setUserInput(() => {
            return { ...userInput, [name]: value }
        })
    }

    function handleSubmit() {
        axios.post("http://localhost:5000/employee/dashboardaddmore", userInput)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(err => console.log(err));
    }

    return (
        <>
            <GoBack
                thisUrl={"/dashboard"}
            />
            <div className='container'>
                <h2 className='my-5 text-center'>Dashboard form details:</h2>
                <form class=" row g-3 card-style my-5 py-5 px-5 mb-5 bg-body-tertiary rounded-3 needs-validation" novalidate>

                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label ">First Name:</label>
                        <input type="text" onChange={handleChange} name="firstName" value={userInput.firstName} class="form-control" id="validationCustom02" required />
                        <div class="invalid-feedback">
                            required field!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Last name:</label>
                        <div class="input-group has-validation">
                            <input type="text" onChange={handleChange} name="lastName" value={userInput.lastName} class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                required field!
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <label for="validationCustom06" class="form-label">E-mail:</label>
                        <input type="email" onChange={handleChange} name="email" value={userInput.email} class="form-control" id="validationCustom06" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom03" class="form-label">Project:</label>
                        <input type="text" onChange={handleChange} name="project" value={userInput.project} class="form-control" id="validationCustom03" required />
                        <div class="invalid-feedback">
                            required field!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom04" class="form-label">Status:</label>
                        <select class="form-select" onChange={handleChange} name="status" value={userInput.status} id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Active</option>
                            <option>Done</option>
                            <option>Pending</option>
                            <option>Close</option>
                            <option></option>
                        </select>
                        <div class="invalid-feedback">
                            required field!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom07" class="form-label">Phone No:</label>
                        <input onChange={handleChange} name="phoneNo" value={userInput.phoneNo} type="number" class="form-control" id="validationCustom07" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </form>
                <div className='text-end'>
                    <button type='submit' className=" end-0 main-btn dark-btn rounded-full btn-hover" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>

    )
}
