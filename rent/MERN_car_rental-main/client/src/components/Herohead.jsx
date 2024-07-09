import cvr from '../assets/cvrr.jpg'

function Herohead(){
    return( 
      
        <div>      <div className="container-fluid">
              <div className="position-relative">
                <img src={cvr} className="w-100 opacity-100" style={{"height": "600px"}} alt="" ></img>
                <p className="text-light position-absolute text-50 start-50 top-50 fw-normal fs-3 "><span className="fs-1 fw-bold"> Rental Cars </span> <br /> Your Gateway to Memorable Adventures <br /> Search hundreds of cars at once</p>
                 
                  
                       
      
                 
                    </div> 
                    </div>  


      <br/><br/></div>
    )
}
export default Herohead;