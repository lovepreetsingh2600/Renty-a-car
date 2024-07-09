import React from 'react';
import { Row, Col, Form, Input, Button, Anchor } from 'antd';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';
import thar from '../assets/thar.webp'


function Register() {


    const dispatch = useDispatch();

    function onFinish(values){
        dispatch(userRegister(values))
        console.log(values);
    }

    return (
        <div  >
            <Row gutter={16} style={{
                marginTop: 10
            }}>
                <Col lg={5}></Col>
                <Col lg={15} className='login'>
                    <Form layout="vertical" onFinish={onFinish}>
                    <div className='row'>
                    <div className='col-lg-6'> <img src={thar} class="w-100  p-2" style={{"height": "500px"}}/></div>
                    <div className='col-lg-6'>
                    <h1>Register</h1>
                        <hr />
                        <Form.Item name='username'  label='Username' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='password' label='Password' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='password' label='Confirm password' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <button type="primary" style={{
                            marginBottom: 4
                        }} >Register</button>
                        
                    </div>
                    </div>
                       
                        <br></br>
                        <Anchor
                            items={[
                                {
                                    key: 'login',
                                    href: '/login',
                                    title: 'Click here to login',
                                }
                            ]}
                        />
                    </Form>
                </Col>

            </Row><br/>
        </div>
    )
}

export default Register;