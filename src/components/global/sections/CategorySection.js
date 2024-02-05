import React from 'react'

function CategorySection() {
  return (
    //<!-- category section -->

    <section className="cat_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="images/c1.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Birthday Cakes
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="images/c2.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Wedding Cakes
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="images/c3.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Cupcakes
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    //<!-- end category section -->
  )
}

export default CategorySection
