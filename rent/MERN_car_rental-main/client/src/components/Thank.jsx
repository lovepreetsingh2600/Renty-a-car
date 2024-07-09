import thnk from '../assets/thank.jpg'
function Thank(){
    return( 
        <div className="">
            <form  className='border'>
              <div><img src={thnk} alt="" /></div>  
              <h1>Thank You !</h1>
              <h4>Your Payment have been Received </h4>
            </form>

        </div>
    )
}
export default Thank;