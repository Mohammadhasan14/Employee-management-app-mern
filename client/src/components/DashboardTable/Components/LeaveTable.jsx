import React, { useState, useEffect } from 'react'
import EditLeave from '../EditLeave'
import DeleteLeave from '../DeleteLeave'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LeaveTable() {
  const [leaveData, setLeaveData] = useState('')
  const Navigate = useNavigate();
  const [state, setState] = useState(false)
  const [stateLeaveTable, setStateLeaveTable] = useState(false)
  const [leaveEditValue, setLeaveEditValue] = useState('')
  const [deleteValue, setDeleteValue] = useState('')

  function addMore() {
    Navigate("/addemployeeleave")
  }


  useEffect(() => {
    axios.get('http://localhost:5000/employee/leave')
      .then(res => {
        console.log(res.data)
        setLeaveData(res.data)
      })
      .catch(error => { console.log(error) })

  }, [])

  function editHandle(index) {
    setState(true)
    const ID = leaveData[index]
    setLeaveEditValue(ID)
    // console.log('editValue in leaveTable ', leaveEditValue)
  }

  function deleteHandle(index) {
    setState(true)
    setStateLeaveTable(true)
    const ID = leaveData[index]
    setDeleteValue(ID)
    // console.log('this is an id to delete:', ID)
  }

  return (

    <div class=" col-lg-6">

      <div class="card-style ms-2 me-2">
        <div class="card-body table-wrapper text-nowrap table-responsive">
          <h5 class="card-title">Leave table</h5>
          <p class="text-sm mb-20">

            Manage employee <code>vacation</code> , <code>sick days</code> and other
            <code> leave</code>  types.
          </p>


          <table class="table table-responsive table-bordered mx-auto">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Approval Status</th>
                <th scope="col">Duration</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveData && leaveData.map((data, index) => {
                return (
                  <tr key={index + 1}>
                    <th scope="row" >{index + 1}</th>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.leaveType}</td>
                    <td><span class={
                      data.approvalStatus === "Rejected" ? "status-btn active-btn" :
                        data.approvalStatus === "Pending" ? "status-btn info-btn" :
                          data.approvalStatus === "canceled" ? "status-btn close-btn" :
                            data.approvalStatus === "Approved" ? "status-btn success-btn" :
                              "status-btn success-btn"
                    }>{data.approvalStatus}</span></td>
                    <td>{data.duration}</td>
                    <td>
                      <div class="action">
                        <i onClick={() => { editHandle(index) }} className="fa-solid text-info-emphasis edit-btn add-delete-btn fa-pen-to-square" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal8"></i>
                        <EditLeave
                          state={state}
                          value={leaveEditValue}
                          path={'leaveUpdate'}
                        />

                        <i onClick={() => { deleteHandle(index) }} className="fa-solid text-danger-emphasis add-delete-btn fa-trash" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal9"></i>
                        <DeleteLeave
                          value={deleteValue}
                          path={'deleteleave'}
                        />

                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>


        </div>

      </div>
      <div className="text-end mt-3 me-2">
        <button className="main-btn dark-btn rounded-5 btn-hover" onClick={addMore}>{"Add More >>"}</button>
      </div>
    </div>

  )
}



