import { NavLink } from "react-router-dom";
function Readmo(){
    return(
        <div className="container text-start">
        <div className="shadow-sm p-4 mb-2">
        <h2>About Us</h2>
        <p className="fw-normal mt-5 fs-5 "> Rent_a_ride is a leading online platform revolutionizing car ownership with flexible and hassle-free 
           car subscription & self-drive rental services. Our innovative platform 
            provides car subscription services that allow individuals to enjoy the benefits of having a car without the risks and complexities of traditional car ownership. </p>
            
           
            
    
    <button type="button" id="Rdmore" onclick="readmore()" className="btn btn-danger btn-lg mt-3 "><NavLink className="text-light" to='/Ques'>Read More</NavLink></button>
    </div>
   
    <br/><br/>
    </div>
    )
}
export default Readmo;