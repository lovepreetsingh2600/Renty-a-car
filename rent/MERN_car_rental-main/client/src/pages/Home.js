import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import {useDispatch, useSelector} from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions';
import { Col, DatePicker, Row ,Card, Button} from 'antd';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

import Herohead from '../components/Herohead';

import Cardstop from '../components/Cardstop';
import Images from '../components/Images';
import Readmo from '../components/Readmo';
import Question from '../components/Question';

import Infos from '../components/Infos';



const {Meta} = Card;

function Home(){
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalCars, setTotalCars] = useState([])
    const { RangePicker } = DatePicker;
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllCars())
    },[])

    useEffect(()=>{
        setTotalCars(cars)
    },[cars])

    function setFilter(values){

    }

    return(
        
        // <DefaultLayout>
            <>
           <Herohead/>
         <Cardstop/>
         <Images/>
         <h1 className='mt-5 '>Cars Available For Rental</h1>
            <Row className='mt-3' justify='center'>
                <Col lg={20} sm={24} className='d-flex justify-content-flex'>

                    <RangePicker onChange={setFilter} className='mt-5 w-50 fs-4' style={{ "height":"50px"}} />

                </Col>
            </Row>

            {loading === true && <Spinner/>}
           
           <Row justify='center'>
            {cars.map(car=>{
            return <Col lg={5} sm={24} xs={24} style={{
                padding:5,
                margin:5
            }}>
            <Card
                    hoverable
                    className='mt-5 border rounded'
                    style={{
                    width: 240,
                    
                    }}
                    cover={<img alt="example" src={car.image} className="card-img"/>}
                >
                <Meta title={`Car:${car.name}`} description={`Rent Per Day: ${car.rentPerHour}` } />
                <div style={{
                    padding:15,
                    marginTop:10,
                }}>
                    <Button type="primary"><Link to={`/booking/${car._id}`}>Book now</Link></Button>
                </div>
               
            </Card>
            </Col>
                })}
            </Row>
            <Readmo/>
             <Question/>
            <Infos/>
           
            </>
        // </DefaultLayout>
       
    )
}

export default Home;