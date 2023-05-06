import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddNavbar(props) {

    const navigate = useNavigate("")

    const handlePageChange = (page) => {
        navigate(page)
        fetch('http://localhost:5000/employee' + page)
            .then(res => res.json())
            .then(data => console.log("navbar data:", data))
            .catch(err => {
                console.error(err)
                console.log(err)
            })
    };

    return (
        <>
            <div className='container'>
                <div className='navigation'>
                    <navbar>
                        <div class="btn-group-lg center px-auto my-5" role="group" aria-label="Basic radio toggle button group">
                            {props.personalChecked == "checked" && <><input type="radio" name="btnradio" id="btnradio1" autocomplete="on" className="btn-check" checked={props.personalChecked} />
                            <label class="btn btn-outline-success-bg-subtle rounded px-4 " onClick={() => {
                                handlePageChange("/personaldetails")
                            }} for="btnradio1"><h4>Personal Details:</h4><p>"Please provide your personal details below"</p><h6>Pages: {" [1/4]"}</h6></label></>}

                            {props.academicChecked == "checked" && <><input type="radio" class="btn-check " name="btnradio" id="btnradio2" autocomplete="on" className="btn-check" checked={props.academicChecked} />
                            <label class="btn btn-outline-success-bg-subtle rounded px-4" onClick={() => {
                                handlePageChange("/academicdetails")
                            }} for="btnradio2"><h4>Academic Details</h4><p>"Please provide your academic details below"</p><h6>Pages: {" [2/4]"}</h6></label></>}

                            {props.skillsChecked == "checked" && <><input type="radio" class="btn-check " name="btnradio" id="btnradio3" autocomplete="on" className="btn-check" checked={props.skillsChecked} />
                            <label class="btn btn-outline-success-bg-subtle rounded" onClick={() => handlePageChange("/internshiporskillsdetails")} for="btnradio3"><h4>Internships or Skills</h4><p>"Please provide your skills details below"</p><h6>Pages: {" [3/4]"}</h6></label></>}

                            {props.jobChecked == "checked" && <><input type="radio" class="btn-check " name="btnradio" id="btnradio4" autocomplete="on" className="btn-check" checked={props.jobChecked} />
                            <label class="btn btn-outline-success-bg-subtle rounded px-5" onClick={() => handlePageChange("/jobdetails")} for="btnradio4"><h4>Job details</h4><p>"Please provide your job details below"</p><h6>Pages: {" [4/4]"}</h6></label></>}
                        </div>
                    </navbar>
                </div>
            </div>
            

        </>

    )
}
