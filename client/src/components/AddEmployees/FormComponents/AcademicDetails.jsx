import React, { useState, useEffect } from 'react'
import PageNav from '../PageNav'
import GoBack from '../GoBack'
import AddNavbar from '../AddNavbar'
import Progressbar from '../Progressbar'
import Note from '../Note'

export default function AcademicDetails(props) {
    const [userInput, setUserInput] = useState({
        board10: "",
        schoolName: "",
        yearOfPassing10: "",
        percentage10: "",
        state10: "",
        city10: "",
        course12: "",
        board12: "",
        college12: "",
        yearOfPassing12: "",
        percentage12: "",
        state12: "",
        city12: "",
        courseGra: "",
        collegeGra: "",
        yearOfPassingGra: "",
        percentageGra: "",
        stateGra: "",
        cityGra: ""


    })

    function handleChange(e) {
        const { name, value } = e.target
        setUserInput(() => {
            return { ...userInput, [name]: value }
        })
        props.updateData.academicData = { ...userInput, [name]: value }
        // console.log('onchange', props.updateData.academicData)
    }

    useEffect(() => {
        if (props.hideObject && props.updateData && props.updateData.academicData) {
            setUserInput(props.updateData.academicData);
        } else if (props.hideObject && props.updateData) {
            setUserInput({
                board10: "",
                schoolName: "",
                yearOfPassing10: "",
                percentage10: "",
                state10: "",
                city10: "",
                course12: "",
                board12: "",
                college12: "",
                yearOfPassing12: "",
                percentage12: "",
                state12: "",
                city12: "",
                courseGra: "",
                collegeGra: "",
                yearOfPassingGra: "",
                percentageGra: "",
                stateGra: "",
                cityGra: ""
            })
        }
    }, [props.updateData, props.hideObject]);

    return (
        <>
            {props.hideObject ? null : <GoBack
                thisUrl={"/employeetable"}
            />}

            {props.hideObject ? null : <AddNavbar
                academicChecked={"checked"}
            />}


            {props.hideObject ? null : <Note />}

            {props.hideObject ? null : <div className='container'>
                <Progressbar
                    progress={"50%"}
                    progressText={"50%"}
                />
            </div>}

            <div className='container' transition-style={props.hideObject ? null : "in:wipe:left"}>

                <form id='academicDetailsForm' class="row card-style my-0 py-5 px-5 mb-5 bg-body-tertiary rounded-3 needs-validation" novalidate>
                    <h3 className='my-3'>10th Education Details:</h3>
                    <div class="col-md-3">
                        <label for="validationCustom01" class="form-label">10th Board:</label>
                        <input type="text" onChange={handleChange} name="board10" value={userInput.board10} class="form-control" id="validationCustom01" required />
                        <div class="valid-feedback">
                            Please write a board name.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom02" class="form-label">School name:</label>
                        <input type="text" onChange={handleChange} name="schoolName" value={userInput.schoolName} class="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Please write a school name.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom03" class="form-label">Year of passing:</label>
                        <div class="input-group has-validation">
                            <input type="date" onChange={handleChange} name="yearOfPassing10" value={userInput.yearOfPassing10} class="form-control" id="validationCustom03" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please choose a date.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">Marks / Percentage:</label>
                        <input type="text" onChange={handleChange} name="percentage10" value={userInput.percentage10} class="form-control" id="validationCustom04" required />
                        <div class="invalid-feedback">
                            Please provide a Percentage.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">State:</label>
                        <select class="form-select" onChange={handleChange} name="state10" value={userInput.state10} id="validationCustom05" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Gujarat</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                            <option></option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom06" class="form-label">City:</label>
                        <input type="text" onChange={handleChange} name="city10" value={userInput.city10} class="form-control" id="validationCustom06" required />
                        <div class="invalid-feedback">
                            Please Write a city name.
                        </div>
                    </div>


                    <h3 className='my-3 pt-5'>12th/Poly Details:</h3>
                    <div class="col-md-3">
                        <label for="validationCustom07" class="form-label">Course:</label>
                        <select class="form-select" onChange={handleChange} name="course12" value={userInput.course12} id="validationCustom07" required>
                            <option selected disabled value="">Choose...</option>
                            <option>12th Board</option>
                            <option>Polytechnic</option>
                        </select>
                        <div class="valid-feedback">
                            Please write a board name.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom08" class="form-label">12th Board:</label>
                        <input type="text" onChange={handleChange} name="board12" value={userInput.board12} class="form-control" id="validationCustom08" placeholder='Not required for poly students' />
                        <div class="valid-feedback">
                            Please write a board name.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom09" class="form-label">College name:</label>
                        <input type="text" onChange={handleChange} name="college12" value={userInput.college12} class="form-control" id="validationCustom09" required />
                        <div class="valid-feedback">
                            Please write a college name.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom10" class="form-label">Year of passing:</label>
                        <div class="input-group has-validation">
                            <input type="date" class="form-control" onChange={handleChange} name="yearOfPassing12" value={userInput.yearOfPassing12} id="validationCustom10" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please choose a date.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom11" class="form-label">Marks / Percentage:</label>
                        <input type="text" onChange={handleChange} name="percentage12" value={userInput.percentage12} class="form-control" id="validationCustom11" required />
                        <div class="invalid-feedback">
                            Please provide a Percentage.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom12" class="form-label">State:</label>
                        <select class="form-select" onChange={handleChange} name="state12" value={userInput.state12} id="validationCustom12" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Gujarat</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                            <option></option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom13" class="form-label">City:</label>
                        <input type="text" onChange={handleChange} name="city12" value={userInput.city12} class="form-control" id="validationCustom13" required />
                        <div class="invalid-feedback">
                            Please Write a city name.
                        </div>
                    </div>
                    <h3 className='my-3 pt-5'>Graduation Details:</h3>
                    <div class="col-md-3">
                        <label for="validationCustom14" class="form-label">Course</label>
                        <select class="form-select" onChange={handleChange} name="courseGra" value={userInput.courseGra} id="validationCustom14" required>
                            <option selected disabled value="">Choose...</option>
                            <option>BBA</option>
                            <option>MBA</option>
                            <option>BE/B.Tech</option>
                            <option>M.tech</option>
                            <option>IT</option>
                            <option>BCA</option>
                            <option>MCA</option>
                            <option>B.Sc</option>
                            <option>M.Sc.</option>
                            <option>Other</option>
                        </select>
                        <div class="valid-feedback">
                            Please write a course name.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom15" class="form-label">College name:</label>
                        <input type="text" onChange={handleChange} name="collegeGra" value={userInput.collegeGra} class="form-control" id="validationCustom15" required />
                        <div class="valid-feedback">
                            Please write a school name.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom16" class="form-label">Year of passing:</label>
                        <div class="input-group has-validation">
                            <input type="date" onChange={handleChange} name="yearOfPassingGra" value={userInput.yearOfPassingGra} class="form-control" id="validationCustom16" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please choose a date.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom17" class="form-label">Marks / Percentage:</label>
                        <input type="text" onChange={handleChange} name="percentageGra" value={userInput.percentageGra} class="form-control" id="validationCustom17" required />
                        <div class="invalid-feedback">
                            Please provide a Percentage.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom18" class="form-label">State:</label>
                        <select class="form-select" onChange={handleChange} name="stateGra" value={userInput.stateGra} id="validationCustom18" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Gujarat</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                            <option></option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom19" class="form-label">City:</label>
                        <input type="text" onChange={handleChange} name="cityGra" value={userInput.cityGra} class="form-control" id="validationCustom19" required />
                        <div class="invalid-feedback">
                            Please Write a city name.
                        </div>
                    </div>

                    {props.hideObject ? null : <PageNav
                        getPrev={"/personaldetails"}
                        getNext={"/internshiporskillsdetails"}
                        data={userInput}
                        getPath={"/academicdetails"}
                        formId={'academicDetailsForm'}
                    />}
                </form>


            </div>
        </>

    )
}
