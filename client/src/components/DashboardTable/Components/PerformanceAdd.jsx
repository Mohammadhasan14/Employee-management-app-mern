import React, { useEffect, useState } from 'react'
import GoBack from '../../AddEmployees/GoBack'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function PerformanceAdd(props) {

  const navigate = useNavigate()
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    reviewPeriod: "",
    performanceRating: "",
    GoalsObjectives: "",
    Accomplishments: "",
    AreasForImprovement: "",
    TrainingAndDevelopment: "",
    feedback: ""
  })

  useEffect(() => {
    if (props.state2 && props.value2 && props.value2) {
        setUserInput(props.value2);

    } else {
        setUserInput({
          firstName: "",
          lastName: "",
          reviewPeriod: "",
          performanceRating: "",
          GoalsObjectives: "",
          Accomplishments: "",
          AreasForImprovement: "",
          TrainingAndDevelopment: "",
          feedback: ""
        })
    }
}, [props.value2, props.state2]);

  function handleChange(e) {
    const { name, value } = e.target
    setUserInput(() => {
      return { ...userInput, [name]: value }
    })
    if (props.onChange) {
      props.onChange(prevState => {
          return { ...prevState, [name]: value }
      })
  }
  }

  function handleSubmit(event) {

    var form = document.getElementById('performanceAddForm');

    // Check if the form is valid
    if (form.checkValidity() === false) {
      return null
    } else {
      event.preventDefault()
      console.log(userInput)
      axios.post('http://localhost:5000/employee/performance', userInput)
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
        <h2 className='my-5 text-center'>Performance form details:</h2>
        <form id='performanceAddForm' class=" row g-3 card-style my-5 py-5 px-5 mb-5 bg-body-tertiary rounded-3 needs-validation" novalidate>
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label ">First Name	:</label>
            <input type="text" onChange={handleChange} name="firstName" value={userInput.firstName} class="form-control" id="validationCustom01" required />
            <div class="invalid-feedback">
              required field!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label ">Last Name	:</label>
            <input type="text" onChange={handleChange} name="lastName" value={userInput.lastName} class="form-control" id="validationCustom02" required />
            <div class="invalid-feedback">
              required field!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label ">Review Period	:</label>
            <input type="text" onChange={handleChange} name="reviewPeriod" value={userInput.reviewPeriod} class="form-control" id="validationCustom03" required />
            <div class="invalid-feedback">
              required field!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">Performance Rating Out of 10:</label>
            <div class="input-group has-validation">
              <input type="number" onChange={handleChange} name="performanceRating" value={userInput.performanceRating} class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend" required />
              <div class="invalid-feedback">
                required field!
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <label for="validationCustom05" class="form-label">Goals/Objectives:</label>
            <input type="text" onChange={handleChange} name="GoalsObjectives" value={userInput.GoalsObjectives} class="form-control" id="validationCustom05" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom06" class="form-label">Accomplishments:</label>
            <input type="text" onChange={handleChange} name="Accomplishments" value={userInput.Accomplishments} class="form-control" id="validationCustom06" required />
            <div class="invalid-feedback">
              required field!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom07" class="form-label">Areas for Improvement:</label>
            <input onChange={handleChange} name="AreasForImprovement" value={userInput.AreasForImprovement} type="text" class="form-control" id="validationCustom07" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom08" class="form-label">Training and Development:</label>
            <input onChange={handleChange} name="TrainingAndDevelopment" value={userInput.TrainingAndDevelopment} type="text" class="form-control" id="validationCustom08" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom09" class="form-label">Feedback:</label>
            <textarea onChange={handleChange} rows={3} name="feedback" value={userInput.feedback} type="text" class="form-control" id="validationCustom09" required />
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
