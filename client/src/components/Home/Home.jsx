import React from 'react'

export default function Home() {
  return (
    <>
      <div >
        <div className='bg-home'>

        </div>

        <div transition-style="in:polygon:opposing-corners" className="container  container-home">
          <div className="card-style rounded-4 py-5">
            <div className="col-sm-8 py-5 mx-auto">
              <h1 className="display-5 content-heading fw-normal text-color-comp-name container-home-text">
                Profuse TransTech - IT Training & Solutions</h1>
              <p className="fs-5 container-home-text">Digital Transformation is key for business success, Thanks to all clients, partners, and employees for partnering with us to realize the vision and create a success story together</p>
              <p className='container-home-text'>Profuse TransTech Solution follows the Learn/understand, Design, Build, Monitor, and Transform approach to solving the technical problems.
                In the learn and understand phase primary focus is on information gathering and understanding the problem statement from a 360-degree viewpoint.</p>
              <p>
                <a className="btn btn-danger container-home-text" href="https://www.profusetranstech.com/technology-services" target="_blank" role="button">Want to know more about us &raquo;</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}
