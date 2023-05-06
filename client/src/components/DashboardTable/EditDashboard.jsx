import React, { useState, useEffect } from 'react'
import PerformanceAdd from './Components/PerformanceAdd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function EditDashboard(props) {
    const navigate = useNavigate();
    const [updatedData, setUpdatedData] = useState(null)



    function handleSave() {

        if (updatedData) {
            // merge the updated data with the existing data   
            const mergedData = { ...props.value, ...updatedData }
            console.log('dataforsave', mergedData)
            axios.post('http://localhost:5000/employee/' + props.path, mergedData)
                .then(res => {
                    console.log(res.data);
                    setTimeout(() => {
                        // navigate('/dashboard');
                        window.location.reload();
                    }, 100)
                })
                .catch(err => console.log(err));
        }
        setUpdatedData(null)


    }


    return (
        <>
            <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Employee</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <PerformanceAdd
                                state2={props.state}
                                value2={props.value}
                                onChange={setUpdatedData} // pass a callback function to update the state
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary " data-bs-dismiss="modal" onClick={handleSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
