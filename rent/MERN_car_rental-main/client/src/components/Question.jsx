function Question(){
    return(
        <div className="shadow-sm p-4 mb-2 container">
        <h2 className="text-start fs-3 fw-bold">FAQ's</h2>
        <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed fs-4  fw-normal text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What is Car Subscription ?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-normal">Car subscription is a service that allows you to drive a car without the ownership hassles. You pay a monthly fee for access to a car, and the subscription service takes care of everything else.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed fs-4 fw-normal text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  How Does Rent_a_ride Subscription Works ?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-normal">Rent_a_ride Subscription is a hassle-free process where you just need to sign in and create your profile, choose the subscription plan, tenure options and choice of a car, complete the paperwork including KYC process, process the security amount and subscription fee and finally get the car at the earliest availability.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed fs-4 text-muted fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                 What is Rent_a_ride Smart Subscription Plan
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-normal">Smart Subscription plan by Myles is a Fractional Ownership product where new cars can be subscribed for a period of 12-48 Months.</div>
              </div>
            </div>
          </div>
          <p></p>
<br /><br />
         
       
    </div>
   
    )
}
export default Question;