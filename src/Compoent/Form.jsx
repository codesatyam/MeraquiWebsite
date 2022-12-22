import React from 'react'
export const Form = () => {
  return (
    <>
        <h2 className="d-flex justify-content-center my-5">Contact Us</h2>
      <div className="services-last d-flex">
        <div className="left ">
        <div className="front">
        <h2>Get in touch with us. Let’s talk!</h2>
          <p>
            We align our understanding according to your business needs and
            proactively initiate the HR processes to suit your requirements
            leveraging the power of Artificial Intelligence. We have a robust
            pan India presence in over 22 states, 55 cities, and are aiming to
            grow significantly in the times to come.
          </p>
        </div>
           
        </div>
        <div className="right">
        <form className="form">
  <div class="mb-3">
     
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
     
    <input type="text" class="form-control" placeholder="Designation" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
     
    <input type="text" class="form-control" placeholder="Organization" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
     
    <input type="email" class="form-control" placeholder="Official Email ID" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
     
    <input type="tel" class="form-control" id="exampleInputEmail1" placeholder="Contact no." aria-describedby="emailHelp"/>
  </div>
  <select class="form-select" aria-label="Default select example">
  <option selected>Enquiry type</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
      </div>
    </>
  )
}
export default Form;
