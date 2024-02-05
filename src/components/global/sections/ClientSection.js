import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectCards,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
function ClientSection() {

  return (
    //<!-- client section -->
    <section className="client_section layout_padding-top">
    <div className="container">
      <div className="heading_container heading_center psudo_white_primary mb_45">
        <h2>
          What Says Our Customers
        </h2>
      </div>
      
      <Swiper 
        modules={[Autoplay,EffectCards,Pagination]}
        slidesPerView={3}
        pagination={true}
        centeredSlides={true}
        effect='cards' 
        autoplay={{delay:5000}}
        breakpoints={{
          300: {
            spaceBetween:10,
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1024:{
            slidesPerView: 3,
          }
        }}
        
    >
              <SwiperSlide >    
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client1.jpg" alt="" className="img-fluid"/>
                      </div>
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>
                          Klara Smith
                        </h6>
                        <p>
                          magna aliqua
                        </p>
                      </div>
                    </div>      
              </SwiperSlide> 

               <SwiperSlide >    
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client2.jpg" alt="" className="img-fluid"/>
                      </div>
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>
                          Klara Smith
                        </h6>
                        <p>
                          magna aliqua
                        </p>
                      </div>
                    </div>      
              </SwiperSlide>

               <SwiperSlide >    
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client1.jpg" alt="" className="img-fluid"/>
                      </div>
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>
                          Klara Smith
                        </h6>
                        <p>
                          magna aliqua
                        </p>
                      </div>
                    </div>      
              </SwiperSlide>

               <SwiperSlide >    
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client2.jpg" alt="" className="img-fluid"/>
                      </div>
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>
                          Klara Smith
                        </h6>
                        <p>
                          magna aliqua
                        </p>
                      </div>
                    </div>      
              </SwiperSlide>   
    </Swiper>
     </div>
    
  </section>

  //<!-- end client section -->
  )
}

export default ClientSection
