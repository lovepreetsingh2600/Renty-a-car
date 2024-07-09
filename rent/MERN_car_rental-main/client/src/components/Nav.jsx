import { NavLink } from "react-router-dom";
import log from '../assets/logs.png'
import React from 'react';
import { Button, Dropdown, Space } from 'antd';
const items = [
    // {
    //   key: '1',
    //   label: (
    //    <a target="_blank" rel="noopener noreferrer" href="">
    //       Profile
    //     </a>
    //   ),
    // },
    // {
    //   key: '2',
    //   label: (
        
    //    <a href="/#"><NavLink className="text-dark" to='/'>My Bookings</NavLink></a>
    //   ),
    // },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="" onClick={(()=>{
            localStorage.removeItem('user');
            window.location.href="/login";
        })}>
          Logout
        </a>
      ),
    },
  ];

  const user= JSON.parse(localStorage.getItem('user'));
  
function Nav(props){
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src={log} className="w-50" alt=""></img></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <a className="nav-link active text-light me-5" aria-current="page" href="#"><NavLink className="text-light" to='/home'>Home</NavLink></a>
                  </li>
                  
                
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Resouces
                    </a>
                    <ul className="dropdown-menu">
                      
                      <li><a className="dropdown-item" href="#"><NavLink className="text-dark" to='/faq'>FAQ</NavLink></a></li>
                      <li><a className="dropdown-item" href="#"><NavLink className="text-dark" to='/admin'>Admin</NavLink></a></li>
                      
                      <li><a className="dropdown-item" href="#"><NavLink className="text-dark" to='/About'>About Us</NavLink></a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     My Bookings
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#"><NavLink className="text-dark" to='/book'>My Booking</NavLink></a></li>                                
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Contact Us
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#"><NavLink className="text-dark" to='/cntct'>Contact Us</NavLink></a></li>
                      
                    </ul>
                  </li>
                </ul>
                
                
               
      </div>
      
    </div>
    <div ><Dropdown 
        menu={{
          items,
        }}
        placement="bottom"
      className=" btn btn-outline-info me-5 "  >
        <Button  >{user?.username}</Button>
      </Dropdown>
        <div className='content' >
                    {props.children}
                </div>
        

</div>
    
   
            

               
            
          </nav>
    )
}
export default Nav;