import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function DeleteEmployee(props) {

    const navigate = useNavigate()

    function handleDelete() {
        console.log(props.deleteData)
        props.deleteData && axios.delete('http://localhost:5000/employee/deleteemployee', { data: props.deleteData })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
            window.location.reload();
    }


    return (
        <>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header pb-5">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure you want to delete ?</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss={"modal"} onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
