import React from 'react'
import { Link } from 'react-router-dom'

function Slider() {
  return (
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>
                      Delicious Cakes
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <Link to="/Order" className="btn1">
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-6">
                  <div className="img-box col-lg-10 mx-auto px-0">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>
                      Delicious Cakes
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <Link to="/Order" className="btn1">
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-6">
                  <div className="img-box col-lg-10 mx-auto px-0">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>
                      Delicious Cakes
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <Link to="/" className="btn1">
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-6">
                  <div className="img-box col-lg-10 mx-auto px-0">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </div>

    </section>
  )
}

export default Slider
