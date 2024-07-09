import React from 'react';
import { Row, Col,Form,Input, Button, Anchor } from 'antd';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';
import thar from "../assets/thar.webp";
import signlog from '../assets/signuplog.png'




function Login(){
        const dispatch = useDispatch();

    
        function onFinish(values){
            dispatch(userLogin(values));
            console.log(values);
        }

    return(
        <div  >
            <Row  gutter={16} style={{
                marginTop:10
            }}>
                <Col lg={5}></Col>
                <Col lg={15} className='login'>
                <Form layout="vertical" onFinish={onFinish}>
                <div className='row'>
                    <div className='col-lg-6'> <img src={thar} class="w-100  p-2" style={{"height": "500px"}}/></div>
                    <div className='col-lg-6'>
                         <img src={signlog} class="w-25" alt=""/>
                     <h1 className='text-start fw-bold'>Login</h1>
                    <p className='text-start mt-4  fs-lighter'>Looks Like you're new here, Sign Up to get
started.</p>
                <hr />
                <Form.Item name='username' label='Username' rules={[{required: true}]}>
                <Input/>
                </Form.Item>
                <Form.Item name='password' label='Password' rules={[{required: true}]}>
                <Input/>
                </Form.Item>
               
                <button type="primary" class="btn btn-primary w-100 mt-5">Login</button>
                </div>
                   <br/> </div>              
                
                <br>
                </br>
                <Anchor
                    items={[
                    {
                        key: 'register',
                        href: '/register',
                        title: 'Sign in',
                    }
                    ]}
                />
                </Form>
                </Col>
           
            </Row><br/>
        </div>
    )
}

export default Login;