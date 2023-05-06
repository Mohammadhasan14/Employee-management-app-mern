import React, { useState, useEffect } from 'react'
import ProjectTable from './Components/ProjectTable'
import PerformanceTable from './Components/PerformanceTable'
import LeaveTable from './Components/LeaveTable'
import _ from 'lodash'
import EmployeeChart from './Components/EmployeeChart'
import ReactCalendar from './Components/Calendar'
import { useLocation } from 'react-router-dom'

export default function Dashboard() {
  const [clock, setCLock] = useState(new Date().toLocaleTimeString())
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [employeeData, setEmployee] = useState("")
  const location = useLocation()

  /////////////////////////////// for clock ///////////////////////////////////

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCLock(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);




  /////////////////////////////// for sidebar more ///////////////////////////

  const sections = {
    '#calendarSection': document.getElementById('calendarSection'),
    '#projectSection': document.getElementById('projectSection'),
    '#leaveAndPerfomSection': document.getElementById('leaveAndPerfomSection'),
    '#reportsSection': document.getElementById('reportsSection'),
    '#overview': document.getElementById('overview')
  };

  function scrollToSection() {
    const hash = window.location.hash;
    const section = sections[hash];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    scrollToSection();
  }, []);

  //////////////////////////////// for searchbar ///////////////////////////////////

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
    const matchingResult = employeeData && employeeData.find(data => data.personalData.firstName === firstName);
    if (matchingResult) {
      const matchingIndex = employeeData && employeeData.indexOf(matchingResult);
      const tableRow = document.querySelectorAll('.table tbody tr')[matchingIndex];
      console.log(tableRow);
      tableRow.classList.add('hovered-row');
      tableRow.scrollIntoView({ block: 'center' });
    }
  }

  function handleSearchListLeave() {
    const hoveredRow = document.querySelector('.hovered-row');

    setTimeout(() => {
      hoveredRow.classList.remove('hovered-row');
    }, 2000)
  }



  return (

    <>
      <div className=" px-3 py-2 border-bottom mb-3" id="overview">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search" action="/dashboard" method="post">
            <input type="search" className="form-control" placeholder="Search by First Name..." value={searchQuery}
              onChange={handleSearch} aria-label="Search" />
            {searchResults.length !== 0 && (
              <ol className="search-list-card list-group">
                {searchResults.map((result) => (
                  <li
                    className='list-group-item hover'
                    onClick={() => handleSearchListClick(result.firstName)}
                    onMouseLeave={handleSearchListLeave}
                    style={{ cursor: "pointer" }}
                    key={result.employeeId}>
                    {"First Name: " + result.firstName}{", "}{"Last Name: " + result.lastName + ", ..."}
                  </li>
                ))}
              </ol>
            )}
          </form>

          <div className="text-end col-6">
            <h5 className='mt-2' style={{color: "#7DA2A9"}}>{clock}</h5>
          </div>
        </div>
      </div>
      
      <section id='projectSection'>
        <h3 className='text-start content-heading mt-3 ms-5 mb-3 pb-4' style={{ color: "#7DA2A9" }}>Projects:</h3>
        <ProjectTable
          employee={setEmployee}
        />
        <hr />
      </section>

      

      <section id="calendarSection"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h3 className='text-start content-heading ms-5 mb-3 pb-4' style={{color: "#7DA2A9"}}>Calendar:</h3>
        <ReactCalendar />
        <hr />
      </section>

      

      <section id='leaveAndPerfomSection' class="section center py-8" 
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div class="row ">
          <h3 style={{color: '#7DA2A9'}} className='text-start content-heading ms-3  pb-4 '>Performance & Leave Table :</h3>
          <PerformanceTable />
          <LeaveTable />
        </div>
        <hr />
      </section>

      

      <section id='reportsSection'
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h3 className='text-start content-heading ms-5 mb-3 pb-4' style={{color: "#7DA2A9"}}>Reports:</h3>
        <EmployeeChart />
        <hr />
      </section>

      

    </>
  )
}

