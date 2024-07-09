import img from '../assets/main.jpeg'

function Images(){
    return(
        <div className="container">
        <div>
            <h2 className="text-center fs-1 mt-4">We Are Ensuring The Best <br/> Customer Experience</h2><br/><br/>
            <p className="text-center fs-5 text-muted">Try RENT_A_RIDE for Hassle-Free Car Ownership</p><br/><br/>
            <img src={img} className="w-100" alt=""/>
        </div>
    </div>
    )
}
export default Images;
