import crd from '../assets/admin.jpeg'
import crd1 from '../assets/admin1.jpeg'
import crd2 from '../assets/admin2.jpeg'
import crd3 from '../assets/admin3.jpeg'



function Cardstop(){
    return(
        <div className="container">
        <div>
            <h2>Get Started with 4 Simple Steps</h2>
        </div>
        <div className="swiper mySwiper">
          <div className="slide-content">
                          
        <div className=" row row-cols-1 row-cols-md-3 g-4 mt-4 swiper-wrapper">
            <div className="col-lg-3 swiper-slide ">
              <div className=" card h-100 ">
                <div className=" d-flex justify-content-center">
                <img src={crd} className="card-img-top w-50 mt-4 " alt="..."/></div>
                <div className="card-body">
                  <h4 className="card-title text-center fs-4 text-muted">Create a Profile</h4><br/>
                  <p className="fw-normal text-center fs-5 text-muted">Fill up your details and <br/> start your car <br/> subscription journey.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 swiper-slide">
              <div className=" card h-100">
                <div className="d-flex justify-content-center">
                <img src={crd1} className="card-img-top w-50 mt-4" alt="..."/> </div>
                <div className="card-body">
                  <h4 className="card-title text-center  text-muted fs-4">Choose a Car </h4><br/>
                  <p  className="fw-normal text-center fs-5 text-muted"> Discover the most suitable <br/> car for you from <br/> the multiple car options</p>

                </div>
              </div>
            </div>
            <div className="col-lg-3 swiper-slide ">
              <div className=" card h-100">
                <div className="d-flex justify-content-center">
                    <img src={crd2} className="card-img-top w-50 mt-4" alt="..."/></div>
                    <div className="card-body">
                      <h4 className="card-title text-center text-muted fs-4">Submit your Documents</h4><br/>
                      <p className="fw-normal text-center fs-5 text-muted">Easy Payment options & <br/> simplified document <br/> verification</p>
                    </div>
              </div>
            </div>
            <div className="col-lg-3 swiper-slide">
                <div className=" card h-100">
                    <div className="d-flex justify-content-center">
                        <img src={crd3} className="card-img-top w-50 mt-4" alt="..."/></div>
                        <div className="card-body">
                          <h4 className="card-title text-center fs-4 text-muted">Car Acquisition</h4><br/>
                          <p className="fw-normal text-center fs-5 text-muted">Get your subscribed car <br/> delivered to your <br/> doorstep</p>
                        </div>
                </div>
              </div>
              
          </div><br/><br/>
          </div>
    </div>
</div>
    )
}
export default Cardstop;