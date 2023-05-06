import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function DeleteLeave(props) {
    const navigate = useNavigate()

    function handleDelete () {
       console.log('for delete: ',props.value) 
       props.value && axios.delete('http://localhost:5000/employee/' + props.path ,{ data: props.value } )
       .then(res =>console.log(res.data))
       .catch( error => console.log(error))
       setTimeout(() => {
        // navigate('/dashboard')
        window.location.reload();
    }, 200)
    }

    return (
        <>
            <div class="modal fade" id="exampleModal9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header pb-5">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure you want to delete ?</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
