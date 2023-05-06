// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

// export default function SignUp() {
//     const loginWithRedirect = useAuth0()
//   return (
//     <body className="text-center my-5 py-5 text-color">

//             <main className=" form-signin w-100 m-auto mp-20">
//                 <form  onSubmit={(e) => e.preventDefault()}>

//                     <h1 className="py-2 h3 mb-3 fw-normal content-heading " >Please sign up</h1>

                    
//                     <div className="form-floating">
//                         <input type="name" className="form-control" id="floatingInput" placeholder="First Name" />
//                         <label className='' for="floatingInput">First name</label>
//                     </div>
//                     <div className="form-floating">
//                         <input type="name" className="form-control" id="floatingPassword" placeholder="Last Name" />
//                         <label className='' for="floatingPassword">Last name</label>
//                     </div>
//                     <div className="form-floating">
//                         <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
//                         <label className='' for="floatingInput">Email address</label>
//                     </div>
//                     <div className="form-floating">
//                         <input type="name" className="form-control" id="floatingPassword" placeholder="Password" />
//                         <label className='' for="floatingPassword">Password</label>
//                     </div>
//                     <div className="form-floating">
//                         <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
//                         <label className='' for="floatingPassword">Confirm Password</label>
//                     </div>

//                     <div className="checkbox mb-3">
//                         <label className=''>
//                             <input type="checkbox" value="remember-me"/> Remember me
//                         </label>
//                     </div>
//                     <button className="w-100 btn btn-lg btn-primary" onClick={() => loginWithRedirect()} type="submit">Sign Up</button>
//                     <p className='mt-3 ' style={{textDecoration:'underline'}}>Already have an account? <Link to='/login'>Log in here.</Link></p>
//                     <p className="mt-5 mb-3 text-muted " >&copy; 2023</p>
//                 </form>
//             </main>



//         </body>
//   )
// }
