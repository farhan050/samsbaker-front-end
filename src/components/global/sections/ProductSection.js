import React from 'react'
import { Link } from 'react-router-dom'

function ProductSection() {
  return (
    //<!-- product section -->

  <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Products
        </h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div>
              <div className="img-box">
                <img src="images/p1.png" alt=""/>
              </div>
              <div className="detail-box">
                <Link to="/">
                  Wedding Cake
                </Link>
                <h6>
                  $38
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div>
              <div className="img-box">
                <img src="images/p2.png" alt=""/>
              </div>
              <div className="detail-box">
                <Link to="/">
                  Cake
                </Link>
                <h6>
                  $15
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div>
              <div className="img-box">
                <img src="images/p3.png" alt=""/>
              </div>
              <div className="detail-box">
                <Link to="">
                  Cupcake
                </Link>
                <h6>
                  $30
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div>
              <div className="img-box">
                <img src="images/p4.png" alt=""/>
              </div>
              <div className="detail-box">
                <Link to="/">
                  Birthday Cake
                </Link>
                <h6>
                  $35
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div>
              <div className="img-box">
                <img src="images/p5.png" alt=""/>
              </div>
              <div className="detail-box">
                <Link to="/">
                  Cupcake
                </Link>
                <h6>
                  $12
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div>
              <div className="img-box">
                <img src="images/p6.png" alt=""/>
              </div>
              <div className="detail-box">
                <Link to="/">
                  Birthday Cake
                </Link>
                <h6>
                  $32
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div>
              <div className="img-box">
                <img src="images/p7.png" alt=""/>
              </div>
              <div className="detail-box">
                <Link to="/">
                  Cake
                </Link>
                <h6>
                  $35
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div>
              <div className="img-box">
                <img src="images/p8.png" alt=""/>
              </div>
              <div className="detail-box">
                <Link to="/Product/234">
                  Cupcake
                </Link>
                <h6>
                  $15
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <Link to="/products">
          View All Products
        </Link>
      </div>
    </div>
  </section>

  //<!-- end product section -->
  )
}

export default ProductSection
