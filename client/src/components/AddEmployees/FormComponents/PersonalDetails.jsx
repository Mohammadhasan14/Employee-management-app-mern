import React, { useState, useEffect } from 'react'
import PageNav from '../PageNav'
import GoBack from '../GoBack'
import AddNavbar from '../AddNavbar'
import Progressbar from '../Progressbar'
import Note from '../Note'

export default function PersonalDetails(props) {

    const [btnState, setBtnState] = useState(false)

    const [userInput, setUserInput] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        city: "",
        state: "",
        pinCode: "",
        dateOfBirth: "",
        email: "",
        phoneNo: "",
        address: ""
    });



    useEffect(() => {
        if (props.hideObject && props.updateData && props.updateData.personalData) {
            setUserInput(props.updateData.personalData);


        } else if (props.hideObject && props.updateData) {
            setUserInput({
                firstName: "",
                middleName: "",
                lastName: "",
                city: "",
                state: "",
                pinCode: "",
                dateOfBirth: "",
                email: "",
                phoneNo: "",
                address: ""
            })
        }
    }, [props.updateData, props.hideObject]);



    function handleChange(e) {
        const { name, value } = e.target
        setUserInput(() => {
            return { ...userInput, [name]: value }
        })
        props.updateData.personalData = { ...userInput, [name]: value }   //this line of code will work because it is possible to modify properties of an object passed as a prop, as long as the object itself is not mutated (i.e., its reference remains the same) ex: we can modify this props.x.x but we cant modify props.x  .
        // console.log('onchange', props.updateData.personalData)
    }

    function handlePrev() {
        setBtnState(true)
    }

    return (
        <>
            {props.hideObject ? null : <GoBack
                thisUrl={"/employeetable"}
            />}

            {props.hideObject ? null : <AddNavbar
                personalChecked={"checked"}
            />}



            {props.hideObject ? null :  <Note />}
            
            {props.hideObject ? null : <div className='container'>
                <Progressbar
                    progress={"25%"}
                    progressText={"25%"}
                />
            </div>}

            <div className='container' transition-style={props.hideObject ? null : "in:wipe:left"}>
                

                <form id='peronalDetailsForm' class="row card-style my-0 py-5 px-5 mb-5 bg-body-tertiary rounded-3 needs-validation" novalidate>
                    <div class="col-md-3 ">
                        <label for="validationCustom01" class="form-label">First name:</label>
                        <input type="text" onChange={handleChange} name="firstName" value={userInput.firstName} class="form-control" id="validationCustom01" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom02" class="form-label">Middle name:</label>
                        <input type="text" onChange={handleChange} name="middleName" value={userInput.middleName} class="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom03" class="form-label">Last name:</label>
                        <div class="input-group has-validation">
                            <input type="text" onChange={handleChange} name="lastName" value={userInput.lastName} class="form-control" id="validationCustom03" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">State:</label>
                        <select class="form-select" onChange={handleChange} name="state" value={userInput.state} id="validationCustom04" required>
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
                        <label for="validationCustom05" class="form-label">City:</label>
                        <input type="text" onChange={handleChange} name="city" value={userInput.city} class="form-control" id="validationCustom05" required />
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom06" class="form-label">Pin code:</label>
                        <input type="text" onChange={handleChange} name="pinCode" value={userInput.pinCode} class="form-control" id="validationCustom06" required />
                        <div class="invalid-feedback">
                            Please provide a valid Pin code.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom07" class="form-label">Date of Birth:</label>
                        <input id="validationCustom07" onChange={handleChange} name="dateOfBirth" value={userInput.dateOfBirth} class="form-control" type="date" required />
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom08" class="form-label">E-mail:</label>
                        <input type="email" onChange={handleChange} name="email" value={userInput.email} class="form-control" id="validationCustom08" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom09" class="form-label">Phone No:</label>
                        <input type="number" onChange={handleChange} name="phoneNo" value={userInput.phoneNo} class="form-control" id="validationCustom09" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom10" class="form-label">Your Address:</label>
                        <input type="text" onChange={handleChange} name="address" value={userInput.address} class="form-control" id="validationCustom10" required />

                    </div>
                    {props.hideObject ? null : <PageNav
                        getPrev={"/personaldetails"}
                        getNext={'/academicdetails'}
                        data={userInput}
                        getPath={"/personaldetails"}
                        hidePrev={handlePrev}
                        formId={'peronalDetailsForm'}
                    />}
                </form>



                {/* <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="/academicdetails">Next &raquo;</a></li>
                </ul>
            </nav> */}

            </div>
        </>


    )
}



