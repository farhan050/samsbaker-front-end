import React from 'react'

function ContactSection() {
  return (
    //<!-- contact section -->
    <section className="contact_section layout_padding">
  
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Contact Us
          </h2>
        </div>
        <div className="row">
          <div className="col-md-9 mx-auto">
            <div className="form_container">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="form-group ">
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="btn-box">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
   // <!-- end contact section -->
  )
}

export default ContactSection
