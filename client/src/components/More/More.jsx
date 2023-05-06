import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function More() {
  const { loginWithRedirect, logout, isAuthenticated  } = useAuth0();
  const handleClose = (event) => {
    event.preventDefault();
    document.body.style.overflowY = 'auto'; // this line prevents the body from scrolling when offcanvas is closed
  }

  function handleClick() {
    const sections = {
      '#calendarSection': document.getElementById('calendarSection'),
      '#projectSection': document.getElementById('projectSection'),
      '#leaveAndPerfomSection': document.getElementById('leaveAndPerfomSection'),
      '#reportsSection': document.getElementById('reportsSection'),
      '#overview': document.getElementById('overview')
    };

    const section = sections[window.location.hash];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (

    <div className="sidebar-nav" id="modal">
      <div
        className="offcanvas offcanvas-end "
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title mx-3" id="offcanvasWithBothOptionsLabel"></h5>
          <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="position-fixed bg-white mx-4 mt-5 ">
          <Link className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom" to="/">
            <svg className="bi me-2" width="30" height="24">
              <use xlinkHref="#home" />
            </svg>
            <span className="fs-5 fw-semibold">Go to Main</span>
          </Link>
        </div>
        <div className="offcanvas-body mt-5">
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button

                className="btn btn-toggle btn-style align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="true"
              >
                Home
              </button>
              <div className="collapse show" id="home-collapse">
                <ul className="btn-toggle-nav ul-style list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link to="/" className="link-dark rounded">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/updates" className="link-dark rounded">
                      Updates
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle btn-style align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Dashboard
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav ul-style list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link to="/dashboard#overview" className="link-dark rounded">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard#projectSection" className="link-dark rounded">
                      Project Table
                    </Link>
                  </li>
                  <li><Link to="/dashboard#calendarSection" onClick={handleClick} className="link-dark rounded">
                    Calendar
                  </Link></li>
                  <li>
                    <a href="/dashboard#leaveAndPerfomSection" className="link-dark rounded">
                      Performance Table
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard#leaveAndPerfomSection" className="link-dark rounded">
                      Leave Table
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard#reportsSection" className="link-dark rounded">
                      Sale Reports
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle btn-style align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                Orders
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav ul-style list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded">New</a></li>
                  <li><a href="#" class="link-dark rounded">Processed</a></li>
                  <li><a href="#" class="link-dark rounded">Shipped</a></li>
                  <li><a href="#" class="link-dark rounded">Returned</a></li>
                </ul>
              </div>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <button class="btn btn-toggle btn-style align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                Account
              </button>
              <div class="collapse" id="account-collapse">
                <ul class="btn-toggle-nav ul-style list-unstyled fw-normal pb-1 small">
                  {isAuthenticated ? <><li><Link to="/profile" class="link-dark rounded">Profile</Link></li>
                  <li><Link className="link-dark rounded" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</Link></li></> : <li><Link className="link-dark rounded" onClick={() => loginWithRedirect()}>Log in</Link></li>
                  }
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default More



// ------------> OFFCANVAS TYPE 1 <-------------------------------

 // <div class="offcanvas offcanvas-end text-bg-dark " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    //   <div class="offcanvas-header" data-bs-theme="dark">
    //     <h5 class="offcanvas-title mx-auto" id="offcanvasWithBothOptionsLabel"></h5>
    //     <button  type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //   </div>
    //   <div class="offcanvas-body">
    //     <div className='my-5 mx-5 ps-4'>
    //     <h3 className='mx-3'>Login / Sign-up</h3>
    //     <div className="px-3 py-3 mx-auto  my-3">
    //         <Link  className="btn btn-lg btn-light text-dark me-4" to="/login">Login</Link>
    //         <Link className="btn btn-lg btn-primary" to='/signup'>Sign-up</Link>
    //     </div>
    //     </div>
        
    //   </div>
    // </div>



    // ------------> OFFCANVAS TYPE 2 <-------------------------------


    // <div class="sidebar-nav">
    
    //     <nav class="navbar navbar-dark bg-danger fixed-top"/>
    
    //         <div class="container">
    
    //             <div class="bg-light offcanvas offcanvas-start shadow" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    
    //               <div class="offcanvas-body">
    
    //                     <ul class="navbar-nav">
    
    //                         <li><a href="#"> <span class="item-text">Home</span></a></li>
    
    //                         <li><a href="#"><span class="item-text">Contact Us</span></a></li>
    
    //                         <li><a href="#"><span class="item-text">About Us</span></a></li>
    
    //                         <li><a href="#"> <span class="item-text">Products</span></a></li>
    
    //                         <li><hr class="dropdown-divider"/></li>
    
    //                         <li><a href="#"><span class="item-text">Send</span></a></li>
    
    //                         <li><a href="#"><span class="item-text">Share</span></a></li>
    
    //                         <li><a href="#"><span class="item-text">Settings</span></a></li>
    
    //                     </ul>
    
    //               </div>
    
    //             </div>
    
    
    
    //             <div class="btn-group " >
    
    //                 <a href="#" class="dropdown-toggle text-white text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
    
                        
    
    //                     <span class="textnone">User Name</span>
    
    //                 </a>
    
    //                 <ul class="bg-warning  dropdown-menu dropdown-menu-end">
    
    //                     <li><button class="dropdown-item" type="button">Change Password</button></li>
    
    //                     <li><button class="dropdown-item" type="button">Edit Profile</button></li>
    
    //                     <li><button class="dropdown-item" type="button">Settings</button></li>
    
    //                     <li><hr class="dropdown-divider"/></li>
    
    //                     <li><button class="dropdown-item" type="button">Sign out</button></li>
    
    //                 </ul>
    
    //             </div>
    
    
    
    //         </div>
    
    // </div>
    
