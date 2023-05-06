import React, { useState, useEffect } from 'react'
import GoBack from '../../AddEmployees/GoBack'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LeaveAdd(props) {
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    leaveType: "",
    approvalStatus: "",
    duration: ""

  })

  useEffect(() => {
    if (props.state2 && props.value2 && props.value2) {
      setUserInput(props.value2);

    } else {
      setUserInput({
        firstName: "",
        lastName: "",
        email: "",
        leaveType: "",
        approvalStatus: "",
        duration: ""
      })
    }
  }, [props.value2, props.state2]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput(() => {
      return { ...userInput, [name]: value }
    })
    if (props.onChange) {
      props.onChange(prevState => {
        return { ...prevState, [name]: value }
      })
    }
    console.log(userInput)
  }


  function handleSubmit(event) {

    var form = document.getElementById('leaveAddForm');

    // Check if the form is valid
    if (form.checkValidity() === false) {
      return null
    } else {
      event.preventDefault()
      console.log(userInput)
      axios.post('http://localhost:5000/employee/leave', userInput)
        .then(res => { console.log(res.data) })
        .catch(err => { console.log(err) })
    }
    document.querySelector(".spinner-border").classList.remove("d-none");
    setTimeout(() => {
      navigate('/dashboard#leaveAndPerfomSection');
    }, 1000)
  }



  return (
    <>
      {props.state2 ? null : <GoBack
        thisUrl={"/dashboard"}
      />}
      <div className='container'>
        <h2 className='my-5 text-center'>Leave form details:</h2>
        <form id='leaveAddForm' class=" row g-3 card-style my-5 py-5 px-5 mb-5 bg-body-tertiary rounded-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label ">First Name:</label>
            <input type="text" onChange={handleChange} name="firstName" value={userInput.firstName} class="form-control" id="validationCustom01" required />
            <div class="invalid-feedback">
              required field!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Last name:</label>
            <div class="input-group has-validation">
              <input type="text" onChange={handleChange} name="lastName" value={userInput.lastName} class="form-control" id="validationCustom02" aria-describedby="inputGroupPrepend" required />
              <div class="invalid-feedback">
                required field!
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">E-mail:</label>
            <input type="email" onChange={handleChange} name="email" value={userInput.email} class="form-control" id="validationCustom03" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label ">Leave Type:</label>
            <input type="text" onChange={handleChange} name="leaveType" value={userInput.leaveType} class="form-control" id="validationCustom04" required />
            <div class="invalid-feedback">
              required field!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom05" class="form-label">Approval Status:</label>
            <div class="input-group has-validation">
              <select className="form-select" name="approvalStatus" id="validationCustom05" value={userInput.status} onChange={handleChange} required>
                <option selected disabled value="">Choose...</option>
                <option>Approved</option>
                <option>canceled</option>
                <option>Pending</option>
                <option>Rejected</option>
                <option></option>
              </select>
              <div class="invalid-feedback">
                required field!
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <label for="validationCustom06" class="form-label">Duration:</label>
            <input type="text" onChange={handleChange} name="duration" value={userInput.duration} class="form-control" id="validationCustom06" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          {props.state2 ? null : <div className='text-end'>
            <button type='submit' className=" end-0 main-btn dark-btn rounded-full btn-hover" onClick={handleSubmit}>Submit <span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span></button>
          </div>}
        </form>

      </div>
    </>

  )
}
