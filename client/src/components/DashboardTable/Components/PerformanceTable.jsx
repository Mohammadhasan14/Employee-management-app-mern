import React, {useEffect, useState} from 'react'
import EditDashboard from '../EditDashboard'
import DeleteDashboard from '../DeleteDashboard'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function PerformanceTable() {
  const [performanceData, setPerformanceData] = useState('')
  const Navigate = useNavigate();
  const [state, setState] = useState(false)
  const [editValue, setEditValue] = useState('')
  const [deleteValue, setDeleteValue] = useState('')

  function addMore () {
    Navigate("/addemployeeperformance")
  }
  

  useEffect(()=>{
    axios.get('http://localhost:5000/employee/performance')
    .then(res =>{
      console.log(res.data)
      setPerformanceData(res.data)
    })
    .catch(error =>{console.log(error)})
    
  },[])

  function editHandle (index) {
    setState(true)
    const ID = performanceData[index]
    setEditValue(ID)
    // console.log(ID)
  }

  function deleteHandle (index) {
    setState(true)
    const ID = performanceData[index]
    setDeleteValue(ID)
    // console.log('this is an id to delete:',ID)
  }

  return (
      <div class="col-lg-6">
        <div class="card-style ms-2 me-2">
          <div class="card-body table-wrapper text-nowrap table-responsive">
            <h5 class="card-title">Performance Table</h5>

            <p>track <code>
              progress</code>, <code>training</code>  and employee <code>performance</code> .</p>
            <table class="table table-bordered border-primary mx-auto">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Review Period</th>
                  <th scope="col">Performance Rating</th>
                  <th scope="col">Goals/Objectives</th>
                  <th scope="col">Accomplishments</th>
                  <th scope="col">Areas for Improvement</th>
                  <th scope="col">Training and Development</th>
                  <th scope="col">Feedback</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                
                {performanceData && performanceData.map((data, index)=>{
                 return (
                  <tr key={index +1}>
                  <th scope="row">{index +1}</th>
                  <td>{data?.firstName}</td>
                  <td>{data?.lastName}</td>
                  <td>{data?.reviewPeriod}</td>
                  <td>{data?.performanceRating}</td>
                  <td>{data?.GoalsObjectives}</td>
                  <td>{data?.Accomplishments}</td>
                  <td>{data?.AreasForImprovement}</td>
                  <td>{data?.TrainingAndDevelopment}</td>
                  <td>{data?.feedback}</td>
                  <td>
                    <div class="action">
                      <i onClick={()=>{editHandle(index)}} className="fa-solid text-info-emphasis edit-btn add-delete-btn fa-pen-to-square" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal6"></i>
                      <EditDashboard 
                        state={state}
                        value={editValue}
                        path={'performanceUpdate'}
                      />

                      <i onClick={()=>{deleteHandle(index)}} className="fa-solid text-danger-emphasis add-delete-btn fa-trash" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal7"></i>
                      <DeleteDashboard 
                        value={deleteValue}
                        path={'deleteperformance'}
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
        <button className="main-btn dark-btn rounded-5 btn-hover" onClick={addMore} >{"Add More >>"}</button>
      </div>
      </div>


  )
}
