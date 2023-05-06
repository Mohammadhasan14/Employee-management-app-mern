import React, { useState } from 'react'
import GoogleMap from './GoogleMap'

function Contact() {

  // contact form submission using "formspree.io"

  return (
    <div className='container  card-style bg-color my-5 py-5 px-5' transition-style="in:wipe:top-right">
      <section className="mb-4 " >

        <h2 className="h1-responsive text-color content-heading font-weight-bold text-center my-4">Feel Free To Contact Us</h2>

        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>

        <GoogleMap />

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" method='post' action='https://formspree.io/f/mjvdjzrg' >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label className='mx-2 my-3' for="name" >Your name</label>
                    <input type="text" id="name" name="name" className="form-control" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label className='mx-2 my-3' for="email" >Your email</label>
                    <input type="email" id="email" name="email" className="form-control" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label className='mx-2 my-3' for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" className="form-control" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label className='mx-2 my-3' for="message">Your message</label>
                    <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea" required></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left my-3">
                <button className="main-btn dark-btn btn-hover" type="submit">Send</button>
              </div>
            </form>

            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><a href="/contact"><i className="fas fa-map-marker-alt fa-2x"></i></a>
                <p>Nagpur, Maharashtra, India.</p>
              </li>
              <li> <a href="/contact"><i className="fas fa-phone mt-4 fa-2x"></i></a>
                <p>+91 9764534276</p>
              </li>
              <li><a href="/contact"><i className="fas fa-envelope mt-4 fa-2x"></i></a>
                <p>profusetranstech@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact