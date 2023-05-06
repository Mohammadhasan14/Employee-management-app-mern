import React from "react";
import { Link } from "react-router-dom";
import More from "../More/More";
import Root from "../../routes/root"
function Navbar() {
    return (
        <div>
            <nav>
                <header>
                    <div className="px-3 py-2 text-bg-dark">
                        <div className="container">
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <Link to="/" className="logo d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                    <h4 className="logo">Profuse TransTech</h4>
                                </Link>

                                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                    <li>
                                        <Link to="/" className="hover-nav nav-link text-secondary">
                                            <svg className="bi  d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#home" /></svg>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className="hover-nav nav-link text-white">
                                            <svg className="bi  d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2" /></svg>
                                            Dashboard
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/employeetable" className="hover-nav nav-link text-white">
                                            <svg className="bi  d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table" /></svg>
                                            Employee Data
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/contact" className="hover-nav nav-link text-white">
                                            <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#people-circle" /></svg>
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="hover-nav nav-link text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                            <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#grid" /></svg>
                                            More
                                        </Link>
                                        <More />
                                    </li>
                                </ul>
                                
                            </div>
                            
                        </div>
                    </div>
                    <Root/>
                </header>


            </nav>

        </div>
    )
}

export default Navbar;