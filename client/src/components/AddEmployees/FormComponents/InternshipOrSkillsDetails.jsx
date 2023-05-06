import React, { useState, useEffect } from 'react'
import PageNav from '../PageNav'
import GoBack from '../GoBack'
import AddNavbar from '../AddNavbar'
import Progressbar from '../Progressbar'
import Note from '../Note'

export default function InternshipSkillsDetails(props) {

    const [userInput, setUserInput] = useState({
        course: "",
        start: "",
        end: "",
        skills: "",
        onlineOrOffline: "",
        tutor: "",
        phoneNo: "",
        address: "",
        project: "",
        mention: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setUserInput(() => {
            return { ...userInput, [name]: value }
        })
        props.updateData.skillData = { ...userInput, [name]: value }
        // console.log('onchange', props.updateData.skillData)
    }

    useEffect(() => {
        if (props.hideObject && props.updateData && props.updateData.skillData) {
            setUserInput(props.updateData.skillData);
        } else if (props.hideObject && props.updateData) {
            setUserInput({
                course: "",
                start: "",
                end: "",
                skills: "",
                onlineOrOffline: "",
                tutor: "",
                phoneNo: "",
                address: "",
                project: "",
                mention: ""
            })
        }
    }, [props.updateData, props.hideObject]);

    return (
        <>
            {props.hideObject ? null : <GoBack
                thisUrl={"/employeetable"}
            />}

            {props.hideObject ? null : <AddNavbar
                skillsChecked={"checked"}
            />}




            {props.hideObject ? null : <Note />}

            {props.hideObject ? null : <div className='container'>
                <Progressbar
                    progress={"75%"}
                    progressText={"75%"}
                />
            </div>}

            <div className='container' transition-style={props.hideObject ? null : "in:wipe:left"}>
                <form id='internshipDetailsForm' class="row card-style my-0 py-5 px-5 mb-5 bg-body-tertiary rounded-3 needs-validation" novalidate>
                    <div class="col-md-3">
                        <label for="validationCustom01" class="form-label">Internship Course:</label>
                        <input type="text" onChange={handleChange} name="course" value={userInput.course} class="form-control" id="validationCustom01" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom02" class="form-label">Start date:</label>
                        <input type="date" onChange={handleChange} name="start" value={userInput.start} class="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom03" class="form-label">End date:</label>
                        <input type="date" onChange={handleChange} name="end" value={userInput.end} class="form-control" id="validationCustom03" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">Skills learned:</label>
                        <div class="input-group has-validation">
                            <input type="text" onChange={handleChange} name="skills" value={userInput.skills} class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please specify skills.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">Online / Offline</label>
                        <select class="form-select" onChange={handleChange} name="onlineOrOffline" value={userInput.onlineOrOffline} id="validationCustom05" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Online</option>
                            <option>Offline</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom06" class="form-label">Tutor name:</label>
                        <input type="text" onChange={handleChange} name="tutor" value={userInput.tutor} class="form-control" id="validationCustom06" required />
                        <div class="invalid-feedback">
                            Please provide a name.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom07" class="form-label">Phone No</label>
                        <input type="number" onChange={handleChange} name="phoneNo" value={userInput.phoneNo} class="form-control" id="validationCustom07" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom08" class="form-label">Address if offline:</label>
                        <input type="text" onChange={handleChange} name="address" value={userInput.address} class="form-control" id="validationCustom08" />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom09" class="form-label">Any project done:</label>
                        <select class="form-select" onChange={handleChange} name="project" value={userInput.project} id="validationCustom09" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom10" class="form-label">If yes please mention:</label>
                        <textarea type="text" onChange={handleChange} name="mention" value={userInput.mention} rows="3" class="form-control" id="validationCustom10" />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    {props.hideObject ? null : <PageNav
                        getPrev={"/academicdetails"}
                        getNext={"/jobdetails"}
                        getPath={"/internshiporskillsdetails"}
                        data={userInput}
                        formId={'internshipDetailsForm'}
                    />}
                </form>


            </div>
        </>

    )
}
