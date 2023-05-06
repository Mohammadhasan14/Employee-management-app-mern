import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useNavigate } from 'react-router-dom';

function Profile() {
    const Navigate = useNavigate()
    const { user, isAuthenticated, isLoading, logout } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    {/* isAuthenticated && (<div classNameName="container text-color mt-5 profile-card-style">
            <img src={user.picture} classNameName='my-2' alt={user.name} />
            <h1>{user.nickname}</h1>
            <p>{user.email}</p>
        </div>)
     */}
    return (
        isAuthenticated && (<section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-md-9 col-lg-7 col-xl-5">
                        <div className="card" style={{borderRadius: "15px"}}>
                            <div className="card-body p-4">
                                <div className="d-flex text-black">
                                    <div className="flex-shrink-0">
                                        <img src={user.picture}
                                            alt={user.name} className="img-fluid"
                                            style={{width: "160px", borderRadius: "10px"}} />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="mb-1">{user.nickname}</h5>
                                        <p className="mb-2 pb-1" style={{color:"#2b2a2a"}}>MERN Developer</p>
                                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                            style={{backgroundColor:" #efefef"}}>
                                            <div>
                                                <p className="small text-muted mb-1">E-mail: </p>
                                                <p className="mb-0">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex pt-1">
                                            <button type="button" onClick={()=>{Navigate('/')}} className="btn btn-outline-primary me-1 flex-grow-1">Go to Home</button>
                                            <button type="button" className="btn btn-primary flex-grow-1" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)



        
    )

}
export default Profile;