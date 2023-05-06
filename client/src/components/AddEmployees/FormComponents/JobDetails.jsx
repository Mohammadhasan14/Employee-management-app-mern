import React, { useState, useEffect } from 'react'
import PageNav from '../PageNav'
import axios from 'axios'
import GoBack from '../GoBack'
import AddNavbar from '../AddNavbar'
import Progressbar from '../Progressbar'
import Note from '../Note'

export default function JobDetails(props) {

  const [state, setState] = useState(false)

  const [userInput, setUserInput] = useState({
    department: "",
    designation: "",
    project: "",
    status: "",
    salary: "",
    start: "",
    end: "",
    working: ""
  })

  function handleChange(e) {
    const { name, value } = e.target
    setUserInput(() => {
      return { ...userInput, [name]: value }
    })
    props.updateData.jobData = { ...userInput, [name]: value }
    // console.log('onchange', props.updateData.jobData)
  }

  function handleClick() {
    setState(true);
  }

  useEffect(() => {
    if (props.hideObject && props.updateData && props.updateData.jobData) {
      setUserInput(props.updateData.jobData);
    } else if (props.hideObject && props.updateData) {
      setUserInput({
        department: "",
        designation: "",
        project: "",
        status: "",
        salary: "",
        start: "",
        end: "",
        working: ""
      })
    }
  }, [props.updateData, props.hideObject]);


  return (

    <>
      {props.hideObject ? null : <GoBack
        thisUrl={"/employeetable"}
      />}

      {props.hideObject ? null : <AddNavbar
        jobChecked={"checked"}
      />}


      {props.hideObject ? null : <Note />}

      {props.hideObject ? null : <div className='container'>
        {state ? <Progressbar
          progress={"100%"}
          progressText={"100%"}
        /> :
          <Progressbar
            progress={"100%"}
            progressText={"100%"}
          />}
      </div>}


      <div className='container' transition-style={props.hideObject ? null : "in:wipe:left"}>
        <form id='jobDetailsForm' class="row card-style my-0 py-5 px-5 mb-5 bg-body-tertiary rounded-3 needs-validation" novalidate>
          <div class="col-md-3">
            <label for="validationCustom01" class="form-label">Department:</label>
            <input type="text" onChange={handleChange} name="department" value={userInput.department} class="form-control" id="validationCustom01" required />
            <div class="valid-feedback">
              It's required
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom02" class="form-label">designation:</label>
            <div class="input-group has-validation">
              <input type="text" onChange={handleChange} name="designation" value={userInput.designation} class="form-control" id="validationCustom02" aria-describedby="inputGroupPrepend" required />
              <div class="invalid-feedback">
                It's required
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">Project working on:</label>
            <input type="text" onChange={handleChange} name="project" value={userInput.project} class="form-control" id="validationCustom03" required />
            <div class="invalid-feedback">
              It's required
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">Status of project:</label>
            <select class="form-select" onChange={handleChange} name="status" value={userInput.status} id="validationCustom04" required>
              <option selected disabled value="">Choose...</option>
              <option>Active</option>
              <option>Done</option>
              <option>Pending</option>
              <option>Close</option>
              <option></option>
            </select>
            <div class="invalid-feedback">
              It's required
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Salary:</label>
            <input type="number" onChange={handleChange} name="salary" value={userInput.salary} class="form-control" id="validationCustom05" required />
            <div class="invalid-feedback">
              It's required
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom06" class="form-label">Start date:</label>
            <input type="date" onChange={handleChange} name="start" value={userInput.start} class="form-control" id="validationCustom06" required />
            <div class="valid-feedback">
              It's required
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom07" class="form-label">End date:</label>
            <input type="date" onChange={handleChange} name="end" value={userInput.end} class="form-control" id="validationCustom07" required />
            <div class="valid-feedback">
              It's required
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom08" class="form-label">Currently working:</label>
            <input type="text" onChange={handleChange} name="working" value={userInput.working} class="form-control" id="validationCustom08" required />
            <div class="valid-feedback">
              It's required
            </div>
          </div>


          {props.hideObject ? null : <div className="container d-flex flex-wrap ">
            <PageNav
              getPrev={"/internshiporskillsdetails"}
              data={userInput}
              getNext={"/employeetable"}
              getPath={"/jobdetails"}
              hideNext={handleClick}
              formId={'jobDetailsForm'}
            />
          </div>}

        </form>
      </div>
    </>
  )
}
