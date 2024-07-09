import { Col, Divider, Row ,DatePicker, Space, Checkbox, Button, Modal} from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner';
import { getAllCars } from '../redux/actions/carsActions';
import moment from 'moment';
import { bookCar } from '../redux/actions/bookingActions';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Input from 'antd/es/input/Input';
import crd7 from '../assets/key.jpg'
import crd8 from '../assets/ful.jpg'
import crd9 from '../assets/mtn.jpg'

const stripePromise = loadStripe('pk_test_51MbqChKLf3MTi9NRWBNbfShYMWMWaUQXvPoqzJdpSTIlr3ixy1vQHKuPTPGMvjRC1wZNIh28dInkmTaYipsljjOt00ZmHCYAcd');

function BookingCar(){

    const {carid} = useParams();
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [car, setcar ]=useState({})
    const dispatch = useDispatch()
    const { RangePicker } = DatePicker;
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [location, setLocation] = useState()
    const [totalHours, setTotalHours] = useState(0)
    const[driver,setDriver]=useState(false);
    const[totalAmount,setTotalAmount] = useState(0)
    const [showModal,setShowModal] = useState(false)

    useEffect (() => {
    if(cars.length==0)
    {
        dispatch(getAllCars())
    }
    else 
    {
    setcar (cars.find(o=>o._id==carid))
    }
    }, [cars])

    useEffect(()=>{
        setTotalAmount((totalHours * car.rentPerHour))
        if(driver){
            setTotalAmount(totalAmount + (400 * totalHours))
        }

    },[driver,totalHours])

    function selectedTimeSlots(values){
        console.log(values[0]);
        console.log(moment(values[0]).format('YYYY-MM-DD'));
        setFrom(moment(values[0]).format('YYYY-MM-DD'))
        

        setTo(moment(values[1]).format('YYYY-MM-DD'))
        console.log(moment(values[1]).format('MMM Do YY'));
        setTotalHours(values[1].diff(values[0],'days'))
    }

    function bookNow(){
        const reqObj = {
            user : JSON.parse(localStorage.getItem('user'))._id,
            car:car._id,
            totalHours,
            location,
            totalAmount,
            driverRequired:driver,
            bookedTimeSlots:{
                from,
                to
            }
        }
        dispatch(bookCar(reqObj))
    }


    return(
        <>
        {loading && (<Spinner />)}
        <Row justify='' className='d-flex ' style={{minHeight: '10vh'}}>
        <Col lg={9} sm={24} xs={24} className='bg-dark bg-gradient '>
            <div className='rounded p-2  '><br/><br/>
            <img src={car.image} className='object-fit-fit border rounded mt-5' style={{
            height:250,
            width:300,
        }} /> <br/><br/>
            </div>
        
        </Col>
        <Col lg={15} className='bg-dark bg-gradient text-light' sm={24} xs={24} >
        <Divider type='' className='fs-4 mt-4 text-light' dashed>Car Info</Divider>
        <div className='text-center container text-light '>
        <p className='fs-2 text-light border-bottom border-dark '>{car.name}</p>
        <div className='row'>
         <div className='col-lg-6'><p>Fuel Type: {car.fuelType} </p></div>
         <div className='col-lg-6'> <p>Max Persons: {car.capacity}</p></div>
        </div>
        
       
        </div>
        <Divider type=''className='fs-5 text-center text-light' dashed>Time slots</Divider>
        <Space direction="vertical" size={12}>
            <RangePicker format='YYYY-MM-DD' className='fs-3   border-dark border-2  mt-3' style={{width:"400px"}} onChange={selectedTimeSlots} />
        </Space>
        <br></br><br/>
        <label className=' fs-6 text-bold text-light'>Select Location</label>
       <select name='location' className='form-select my-1 w-50  border-dark border-2' style={{marginLeft:"200px"}} onChange={(e) => setLocation(e.target.value)}>
        <option value={""} readonly > Select Location</option>
        <option value={"delhi"}> Amritsar</option>
        <option value={"delhi"}> Jalandhar</option>
        <option value={"delhi"}> Batala</option>
        <option value={"delhi"}> Chandighar</option>
        <option value={"delhi"}> Zirakpur</option>
        <option value={"delhi"}> Ludhiana</option>
        <option value={"delhi"}> Mohali</option>
        <option value={"delhi"}> Faridkpot</option>
       </select>
        <br></br>
        <Button className='mt-3  border-dark border-2' onClick={()=>setShowModal(true)}>Show booked slots</Button>
        <br></br>
        <Checkbox className='mt-3 mb-3 text-light' onChange={(e)=>{
            if(e.target.checked){
                setDriver(true)
            }else{
                setDriver(false)
            }
        }}>
            Driver required
        </Checkbox><br></br>
        {from && to &&(
            <div>
                <p>Total Days : <b> {totalHours}</b></p>
                <p>Rent per Day : <b> {car.rentPerHour}</b></p>
                <p>Total amount : {totalAmount}</p>
            </div>
            
        )}

      {car.name && (
        <Modal title="Booked time slots" className='' open={showModal} closable={false} footer={false}  >
        {
            cars.length && (<div className='p-2'>
                
                {car.bookedTimeSlots.map(slot=>{
                    return <Button type="primary" size='large' className='mt-3 me-2 bg-success' >
                    {slot.from} - {slot.to}
                  </Button>
                })}

                <div className='text-right'>
                <Button type="primary" className='mt-3 bg-danger' onClick={()=>setShowModal(false)} >
                    Close
                  </Button>
                </div>
            </div>)
        }
  </Modal> 
      )}
        
        <Button type="dashed" size='large' className='mt-3 border-dark border-2 bg-success text-light ' onClick={bookNow}>
            Book now
          </Button>
          <br/>
          <br/>
        

        </Col>
        </Row><br/>
        <div>       <div className="container-fluid">
          <h1 className="mt-5">Why rent_a_ride?</h1><br/>
          <div className="row w-100">
              <div className="col-lg-4">
                  <div className="card text-bg-light">
                      <img src={crd7} className="card-img w-50" alt="..."/>
                      <div className="card-img-overlay w-50 mt-2 ms-auto " >
                        <h5 className="card-title text-dark w-100 ">Home deleivery and return</h5>
                        <p className="card-text text-danger "><b>On time door step service, at your door</b></p>
                        
              
                      </div>
                    </div>
  
  
              </div>
             
              <div className="col-lg-4">
                  <div className="card text-bg-light">
                      <img src={crd8} className="card-img w-50" alt="..."/>
                      <div className="card-img-overlay w-50 mt-2 ms-auto ">
                          <h5 className="card-title text-dark w-100 ">Flexible pricing plans</h5>
                          <p className="card-text text-danger "><b>Choose unlimited km or with fuel plans</b></p>
                          
                        </div>
                    </div>
  
              </div>
  
              <div className="col-lg-4">
                  <div className="card text-bg-ligh4">
                      <img src={crd9} className="card-img w-50" alt="..."/>
                      <div className="card-img-overlay w-50 mt-2 ms-auto ">
                          <h5 className="card-title text-dark w-100">Well maintained cars</h5>
                          <p className="card-text text-danger "><b>Regular service & maintainence</b></p>
                          
                
                        </div>
                    </div>
  
              </div>
  
  
          </div>
  
      </div><br/><br/>  <br/>  
      
      <div className="container border border-secondary bg-dark p-3">
            <div className="row">
                <div className="col-lg-6">
                   
                    <div className="card-body ">
                        <h5 className="card-title text-center text-light fs-1 ">Wanna Ride ?</h5>
                        </div>
                        </div>
                <div className="col-lg-6">
                    <div className="card-body ">
                    
                        <h5 className="card-title text-start text-light">Best place to find your dream car <br/>
                          to drive with your family</h5>
                        
                      </div>
                </div>
            
        </div>
        </div><br/>   <br/><br/>
        <div className="container">
          <div className="shadow-sm p-4 mb-2 mt-5">
            <h2>FAQ's</h2>
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
    
        </div>

        </div> <br/>

        <div className="container mt-5">
             <div className="row mt-5 shadow">
              <div className="col-lg-3">
                <h1 className="fw-normal text-muted fs-3">Why Choose Rent_a_ride Self Drive Cars in India?</h1>
      
              </div>
              <div className="col-lg-3">
                <i className="fa-solid fa-car fs-1"></i>
                <h2 className="mt-3 fw-normal text-muted">Accessible</h2>
                <p className="fw-normal text-muted mt-3">There’s always a Rent_a_ride near you</p>
      
              </div>
              <div className="col-lg-3">
                <i className="fa-solid fa-wallet fs-1"></i>
                <h2 className="mt-3 fw-normal text-muted">Secure</h2>
                <p className="fw-normal text-muted mt-3"> Pay 0 security deposit, get unlimited KMs</p>
      
              </div>
              <div className="col-lg-3">
                <i className="fa-solid fa-car fs-1"></i>
                <h2 className="mt-3 fw-normal text-muted">Convenient</h2>
                <p className="fw-normal text-muted mt-3">From Hatchbacks to SUVs, choose from 25,000+ cars</p>
      
              </div>
      
             </div>
          </div>
        
        
     </div><br/><br/><br/><br/>
</>
      
    )
}

export default BookingCar;