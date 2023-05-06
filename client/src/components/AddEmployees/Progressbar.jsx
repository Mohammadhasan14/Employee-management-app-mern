import React from 'react'

export default function Progressbar(props) {
    return (
        <>
            <div class="progress mt-5" style={{height:"25px"}} role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="50" aria-valuemax="100">
                <div class="progress-bar bg-dark progress-bar-striped progress-bar-animated styleProgress" style={{ width: props.progress}}> {props.progressText} </div>
            </div>
        </>
    )
}
