import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditEmployee from '../EditOrDelete/EditEmployee'
import DeleteEmployee from '../EditOrDelete/DeleteEmployee'
import _ from 'lodash'

export default function EmployeeTable() {
  const navigate = useNavigate()
  const [detailForm, setDetailForm] = useState(false)
  const [stateEdit, setStateEdit] = useState(false)
  const [employeeData, setEmployeeData] = useState("")
  const [tableIndexEdit, setTableIndexEdit] = useState("")
  const [tableIndexDelete, setTableIndexDelete] = useState("")
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleClickDetails() {
    setDetailForm(prevValue => !prevValue)
  }

  function navToAdd() {
    navigate("/personaldetails")
  }

  function handleClickEdit(index) {
    setStateEdit(true)
    const ID = employeeData[index]
    console.log("This is an ID to edit", ID)
    setTableIndexEdit(ID)
  }



  function handleClickDelete(index) {
    const ID = employeeData[index]
    console.log("This is an ID to delete", ID)
    setTableIndexDelete(ID)

  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/employee/employeeData');
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchData();
  }, []);


  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    console.log("query onchange ", query);
  
    // Search for matching records in the MongoDB database
    if (query) {
      const matchingResults = employeeData?.filter(data => _.toLower(data?.personalData?.firstName).includes(_.toLower(query)));
      console.log("matchingResults", matchingResults);
  
      if (matchingResults.length > 0) {
        const newResults = matchingResults.map(result => result?.personalData);
        setSearchResults(newResults);
      } else {
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };
  

  function handleSearchListClick(firstName) {
    const matchingResult = employeeData.find(data => data.personalData.firstName === firstName);
    if (matchingResult) {
      const matchingIndex = employeeData.indexOf(matchingResult);
      const tableRow = document.querySelectorAll('.table tbody tr')[matchingIndex];
      console.log(tableRow);
      tableRow.classList.add('hovered-row');
      tableRow.scrollIntoView({ block: 'center' });
    }
  }

  function handleSearchListLeave() {
    const hoveredRow = document.querySelector('.hovered-row');
    
    setTimeout(()=>{
      hoveredRow.classList.remove('hovered-row');
    },2000)
  }




  return (
    <>
      <div className=" px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search by First Name..."
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchResults.length !== 0 && (
              <ol className="search-list-card list-group">
                {searchResults?.map((result) => (
                  <li
                    className='list-group-item'
                    onClick={() => handleSearchListClick(result.firstName)}
                    onMouseLeave={handleSearchListLeave}
                    style={{cursor: "pointer"}}
                    key={result.employeeId}>
                    {"First Name: " + result.firstName}{", "}{"Last Name: " + result.lastName + ", ..."}
                  </li>
                ))}
              </ol>
            )}
          </form>
          <div className="text-end col-6">

            <button className="main-btn dark-btn rounded-full-1 btn-hover" onClick={handleClickDetails} role="button">{detailForm ? '<< Back' : "<< Details"}</button>
            <button className="main-btn success-btn rounded-full-2 btn-hover" onClick={navToAdd}>{"Add More >>"}</button>

          </div>
        </div>
      </div>


      <div className='container  container-fluid text-nowrap align-items-center table-wrapper'>
        <div class="row mt-5 ">
          <div class="col-lg-12 ">
            <div class="card-style mb-30 shadow-lg">
              <h3 class="mb-10 center text-color  content-heading">Employee Details:</h3>
              <h5 class="text-sm mb-20 center mb-5">
                Contains personal and professional information for each employee in organization, offering a comprehensive overview.
              </h5>
              <div class="table-wrapper text-nowrap table-responsive">
                <table class="table table-hover " >
                  <thead>
                    <tr>
                      {detailForm ? null : <>
                        <th><h6>ID</h6></th>
                        <th><h6>First Name</h6></th>
                        <th><h6>Last Name</h6></th>
                        <th><h6>Department</h6></th>
                        <th><h6>Designation</h6></th>
                        <th><h6>Phone No.</h6></th>
                        <th><h6>E-mail</h6></th>
                        <th><h6>Action</h6></th></>}

                      {detailForm && <>
                        <th><h6>ID</h6></th>
                        <th><h6>First Name</h6></th>
                        <th><h6>Middle Name</h6></th>
                        <th><h6>Last Name</h6></th>
                        <th><h6>City</h6></th>
                        <th><h6>State</h6></th>
                        <th><h6>Pin code</h6></th>
                        <th><h6>Date of birth</h6></th>
                        <th><h6>E-mail</h6></th>
                        <th><h6>Phone no</h6></th>
                        <th><h6>Address</h6></th>
                        <th><h6>10 Board</h6></th>
                        <th><h6>10 School name</h6></th>
                        <th><h6>10 Year of passing</h6></th>
                        <th><h6>10 Percentage</h6></th>
                        <th><h6>10 State</h6></th>
                        <th><h6>10 City</h6></th>
                        <th><h6>12 Course</h6></th>
                        <th><h6>12 Board</h6></th>
                        <th><h6>12 College</h6></th>
                        <th><h6>12 Year of passing</h6></th>
                        <th><h6>12 Percentage</h6></th>
                        <th><h6>12 State</h6></th>
                        <th><h6>12 City</h6></th>
                        <th><h6>Grad course</h6></th>
                        <th><h6>Grad college</h6></th>
                        <th><h6>Grad Year of passing</h6></th>
                        <th><h6>Grad Percentge</h6></th>
                        <th><h6>Grad State</h6></th>
                        <th><h6>Grad City</h6></th>
                        <th><h6>Internship Course</h6></th>
                        <th><h6>Start date</h6></th>
                        <th><h6>End date</h6></th>
                        <th><h6>Skills</h6></th>
                        <th><h6>Online or Offline</h6></th>
                        <th><h6>Tutor</h6></th>
                        <th><h6>Address</h6></th>
                        <th><h6>Phone no</h6></th>
                        <th><h6>Project</h6></th>
                        <th><h6>Mention project</h6></th>
                        <th><h6>Department</h6></th>
                        <th><h6>Designation</h6></th>
                        <th><h6>Project</h6></th>
                        <th><h6>Status</h6></th>
                        <th><h6>Salary</h6></th>
                        <th><h6>Start date</h6></th>
                        <th><h6>End date</h6></th>
                        <th><h6>Currently working</h6></th>
                        <th><h6>Action</h6></th></>}
                    </tr>
                  </thead>
                  <tbody>

                    {employeeData && employeeData.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td class="min-width">
                              <p>{index + 1}</p>
                            </td>
                            {detailForm ? null : <>
                              {/* personal details */}

                              <td class="min-width">
                                <p>{data?.personalData?.firstName}</p>
                              </td>
                              <td class="min-width">
                                <p>{data?.personalData?.lastName}</p>
                              </td>
                              <td class="min-width">
                                <p>{data?.jobData?.department}</p>
                              </td>
                              <td class="min-width">
                                <p>{data?.jobData?.designation}</p>
                              </td>
                              <td class="min-width">
                                <p>{data?.personalData?.phoneNo}</p>
                              </td>
                              <td class="min-width">
                                <p><a href="#0">{data?.personalData?.email}</a></p>
                              </td>
                            </>}


                            {detailForm &&
                              <>
                                {/* personaldetails */}
                                <td class="min-width">
                                  <p>{data?.personalData?.firstName}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.personalData?.middleName}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.personalData?.lastName}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.personalData?.city}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.personalData?.state}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.personalData?.pinCode}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.personalData?.dateOfBirth}</p>
                                </td>
                                <td class="min-width">
                                  <p><a href="#0">{data?.personalData?.email}</a></p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.personalData?.phoneNo}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.personalData?.address}</p>
                                </td>
                                {/* academicdetails */}
                                <td class="min-width">
                                  <p>{data?.academicData?.board10}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.schoolName}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.yearOfPassing10}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.percentage10}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.state10}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.city10}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.course12}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.board12}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.college12}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.yearOfPassing12}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.percentage12}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.state12}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.city12}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.courseGra}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.collegeGra}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.yearOfPassingGra}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.percentageGra}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.stateGra}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.academicData?.cityGra}</p>
                                </td>
                                {/* InternshipSkillsDetails */}
                                <td class="min-width">
                                  <p>{data?.skillData?.course}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.skillData?.start}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.skillData?.end}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.skillData?.skills}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.skillData?.onlineOrOffline}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.skillData?.tutor}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.skillData?.address}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.skillData?.phoneNo}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.skillData?.project}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.skillData?.mention}</p>
                                </td>
                                {/* JobDetails */}
                                <td class="min-width">
                                  <p>{data?.jobData?.department}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.jobData?.designation}</p>
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
                                <td class="min-width">
                                  <p>{data?.jobData?.salary}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.jobData?.start}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.jobData?.end}</p>
                                </td>
                                <td class="min-width">
                                  <p>{data?.jobData?.working}</p>
                                </td>
                              </>
                            }

                            <td>
                              <div class="action">
                                <i className="fa-solid text-info-emphasis edit-btn add-delete-btn fa-pen-to-square" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => handleClickEdit(index)}></i>
                                <EditEmployee
                                  isTrue={stateEdit}
                                  editData={tableIndexEdit}
                                />

                                <i className="fa-solid text-danger-emphasis add-delete-btn fa-trash" type="button" data-bs-toggle="modal" onClick={() => handleClickDelete(index)} data-bs-target="#exampleModal2"></i>
                                <DeleteEmployee
                                  deleteData={tableIndexDelete}
                                />

                              </div>
                            </td>
                          </tr>
                        </>
                      )
                    })}
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

