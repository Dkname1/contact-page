import React from 'react';
import Header from './Header';
// import img from'./8.png';
import './Contact.css';
import {FaEnvelope, FaHome} from 'react-icons/fa';
import {FaPhoneSquareAlt} from 'react-icons/fa';



const Contact = () => {
              return (
                   <div>
                      
             
               <section className='pic1'>
                <h1>CONTACT US</h1>
              <div className='title'>
                <h2>COMPANY NAME</h2>
                 <p className='teleimg'></p>
              </div>
         <div className='para'>

              <div className='left'>
                    <h3>WE will guided......</h3>
                     <h3>.....about website  </h3> 
              </div>
                

               <div className='middle'>
                
                 
               
              </div>

               <div className='right'>
                  
                            <div className='registration'>
                                  <button>For registration</button>
                            </div>
                              <div className='email'>
                                <FaEnvelope size={25} className='email1'
                                 style={{color:'#fff',marginRight: "2rem"}}/>
                             <p>abcd@gmail.com</p> 
                                   
                            </div>

                            <div className='phone'>
                                <FaPhoneSquareAlt size={25} className='phone1'
                                 style={{color:'#fff',marginRight: "2rem"}}/>
                                   <div>
                                   <p>123-456-7890</p> 
                                   </div>
                            </div>

                            <div className='home'>
                                <FaHome size={25} 
                                 style={{color:'#fff',marginRight: "2rem"}}/>
                                   <div>
                                   <p>company address</p> 
                                   </div>
                            </div>
              
              
                      </div>
                 </div>

         </section>


         <section className='pic2'>
           {/* <div className='pic2'> */}
              <h1>our location</h1>
              <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.282371686708!2d77.35004491353396!3d28.620152160741206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1684655226564!5m2!1sen!2sin"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <input type='text'name='text' placeholder='search'/>
              {/* </div> */}
         </section>

  </div>       
              );
};

export default Contact;