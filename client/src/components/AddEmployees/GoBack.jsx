import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function GoBack(props) {

    const navigate = useNavigate()

    function goBack() {
        navigate(props.thisUrl)
    }
    return (
        <div className=" px-3 py-2 border-bottom mb-3">
            <div className="text-end col-12">
                <button className="main-btn mx-5 success-btn rounded-full btn-hover" onClick={goBack}>{'<<  Go back'}</button>
            </div>
        </div>
    )
}
