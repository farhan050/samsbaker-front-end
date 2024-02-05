import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    //<!-- footer section -->
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>
                Reach at..
              </h4>
              <div className="contact_link_box">
                <Link to="/location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    Location
                  </span>
                </Link>
                <Link to="/">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>
                    Call +01 1234567890
                  </span>
                </Link>
                <Link to="/">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                    demo@gmail.com
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <Link to="/" className="footer-logo">
                SamsBakers
              </Link>
              <p>
                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div className="footer_social">
                <Link to="/">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="map_container">
              <div className="map">
                <div id="googleMap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
   // <!-- footer section -->
  )
}

export default Footer
