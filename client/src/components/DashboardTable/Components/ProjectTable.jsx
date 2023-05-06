import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectTable(props) {
  const navigate = useNavigate("")
  const [employeeData, setEmployeeData] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/employee/employeeData');
        const data = await response.json();
        setEmployeeData(data);
        props.employee(data)
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='container container-fluid align-items-center'>
        <div class="row mt-5">
          <div class="col-lg-12 center">
            <div class="card-style mb-30">
              <h4 class="mb-10">Projects Table</h4>
              <p class="text-sm mb-20 mb-4">
                Employees <code>Projects</code>  and their <code>status</code>  info.
              </p>
              <div class="table-wrapper table-responsive">
                <table class=" table table-hover">
                  <thead>
                    <tr>
                      <th><h6>Employee ID</h6></th>
                      <th><h6>First Name</h6></th>
                      <th><h6>Last Name</h6></th>
                      <th><h6>Email</h6></th>
                      <th><h6>Project</h6></th>
                      <th><h6>Status</h6></th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeData && employeeData.map((data, index) => (<tr>
                      <td class="min-width">
                        <p>{index + 1}</p>
                      </td>
                      <td class="min-width">
                        <p>{data?.personalData?.firstName}</p>
                      </td>
                      <td class="min-width">
                        <p>{data?.personalData?.lastName}</p>
                      </td>
                      <td class="min-width">
                        <p><a href="#0">{data?.personalData?.email}</a></p>
                      </td>
                      <td class="min-width">
                        <p>{data?.jobData?.project}</p>
                      </td>
                      <td class="min-width">
                        <span class={
                          data?.jobData?.status === "Active" ? "status-btn active-btn" :
                            data?.jobData?.status === "Pending" ? "status-btn info-btn" :
                              data?.jobData?.status === "Close" ? "status-btn close-btn" :
                                data?.jobData?.status === "Done" ? "status-btn success-btn" :
                                  "status-btn success-btn"
                        }>{data?.jobData?.status}</span>
                      </td>
                    </tr>))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
