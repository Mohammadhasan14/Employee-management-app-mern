import Home from "../components/Home/Home";
import Dashboard from "../components/DashboardTable/Dashboard";
import Contact from "../components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../components/LoginAndSignup/SignUp";
import LogIn from "../components/LoginAndSignup/LogIn";
import PersonalDetails from "../components/AddEmployees/FormComponents/PersonalDetails";
import JobDetails from "../components/AddEmployees/FormComponents/JobDetails";
import AcademicDetails from "../components/AddEmployees/FormComponents/AcademicDetails";
import InternshipSkillsDetails from "../components/AddEmployees/FormComponents/InternshipOrSkillsDetails";
import AddNavbar from "../components/AddEmployees/AddNavbar";
import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import DashboardAdd from "../components/DashboardTable/DashboardAdd";
import Updates from "../components/updates/Updates"
import Profile from "../components/Profile/Profile";
import PerformanceAdd from "../components/DashboardTable/Components/PerformanceAdd";
import LeaveAdd from "../components/DashboardTable/Components/LeaveAdd";


function Root() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/addmore" element={<AddNavbar />}/>
          <Route path="/personaldetails" element={<PersonalDetails/>}></Route>
          <Route path="/academicdetails" element={<AcademicDetails />}></Route>
          <Route path="/internshiporskillsdetails" element={<InternshipSkillsDetails />}></Route>
          <Route path="/jobdetails" element={<JobDetails/>}></Route>
          <Route path="/employeetable" element={<EmployeeTable />}/>
          <Route path="/dashboardaddmore" element={<DashboardAdd />}/>
          <Route path="/updates" element={<Updates />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/addemployeeleave" element={<LeaveAdd />}/>
          <Route path="/addemployeeperformance" element={<PerformanceAdd />}/>
        </Routes>
    </>
  );
}

export default Root;