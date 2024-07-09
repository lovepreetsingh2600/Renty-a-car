import contct from '../assets/contact.jpg'
function Contactus(){
    return(
        <div className="container-fluid">
            <div class="card text-bg-dark mt-5">
  <img src={contct} class="card-img" className='w-100' style={{height:"400px"}} alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title text-dark text-start">Contact Us</h1>
    <p class="card-text text-start text-dark mt-4">Rent_a_ride Amritsar, Punjab</p>
    <p class="card-text text-dark text-start">
        Shop Number : 12 <br />
        Opposite khalsa college 

    <br /><br />
    <h5>Personal Number</h5>
    Ph: 9555467845 <br />
    Ph: 7888965423

    </p>
    <p className='card-text text-dark text-start'>
        <h5>Coustomer Care</h5>
        Ph: 8877642589 <br />
          Ph: 7888563259

    </p>
  </div>
</div>
            <br /><br /><br />
        </div>
    )
}
export default Contactus;