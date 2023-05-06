
import PersonalDetails from '../AddEmployees/FormComponents/PersonalDetails'
import AcademicDetails from '../AddEmployees/FormComponents/AcademicDetails'
import InternshipSkillsDetails from '../AddEmployees/FormComponents/InternshipOrSkillsDetails'
import JobDetails from '../AddEmployees/FormComponents/JobDetails'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function EditEmployee(props) {

    const navigate = useNavigate()

    function handleChanges() {
        props.editData && axios.post('http://localhost:5000/employee/updateemployee', props.editData)
          .then(res => {
            console.log(res.data);
            
          })
          .catch(err => console.log(err));
          navigate('/employeetable')
          
      }
      


    return (
        <>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Make changes</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h2>1) Personal details:</h2>
                            <PersonalDetails
                                hideObject={props.isTrue}
                                updateData={props.editData}

                            />
                            <h2>2) Academic details:</h2>
                            <AcademicDetails
                                hideObject={props.isTrue}
                                updateData={props.editData}
                            />
                            <h2>3) Internship details:</h2>
                            <InternshipSkillsDetails
                                hideObject={props.isTrue}
                                updateData={props.editData}
                            />
                            <h2>4) Job details:</h2>
                            <JobDetails
                                hideObject={props.isTrue}
                                updateData={props.editData}
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary reload-page"  data-bs-dismiss="modal" onClick={handleChanges}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
