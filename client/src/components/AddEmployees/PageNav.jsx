import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export default function (props) {

    const navigate = useNavigate("")

    function previous() {
        navigate(props.getPrev)
        fetch('http://localhost:5000/employee' + props.getPrev)
            .then((res) => res.json())
            .then((data) => console.log("fetch data: ", data))
            .catch(err => console.log(err))
    }

    function next(event) {

        // Get the form element
        var form = document.getElementById(props.formId);

        // Check if the form is valid
        if (form.checkValidity() === false) {
            return null
        } else {
            axios.post("http://localhost:5000/employee" + props.getPath, props.data)
                .then(res => {
                    console.log("this is axios res" + res);
                    console.log(res.data);
                }).catch(err => console.log(err));
            event.preventDefault();
            if (props.getNext == "/employeetable") {
                document.querySelector(".spinner-border").classList.remove("d-none");
                setTimeout(() => {
                    navigate(props.getNext);
                }, 1000)

            } else {
                document.querySelector(".spinner-border").classList.remove("d-none");
                window.location.href = props.getNext;
            }


        }


    }

    return (
        <>

            <div class=" mt-5 col-12">
                {props.hidePrev ? null : <button class="main-btn dark-btn square-btn btn-hover me-2" type="submit" for={props.getPrevRadio} onClick={previous}>Previous</button>}
                <button class="main-btn dark-btn square-btn btn-hover" type="submit" for={props.getNextRadio} onClick={next}>{props.hideNext ? "Submit " : "Save & Next"} <span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span></button>
            </div>
        </>
    )
}
