import React, {useRef} from 'react';
import { Button} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wave from 'react-wavify'
import {CiUser , CiMail} from "react-icons/ci"
import {FaRegEdit} from "react-icons/fa"
import pic1 from "./support.png"


const Contact = () => {
  const notify = () => toast("Message Sent Successfully!");
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ctga1q', 'template_myvo7y8', form.current, 'lNFvvSoFeDYJf75YZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset() 
  };

  
  return (
        <section>
         
          
            
              <Wave fill='#f79902'
        paused={true}
        options={{
          height: 5,
          amplitude: 50,
          points: 4
        }}
        className="wave"
 
  />
 
                <h2 className='contact'>CONTACT US</h2>
                <img src={pic1} alt="support" />
                <div className='container'>
                <form ref={form} onSubmit={sendEmail} style={{marginTop:"-390px"}}>
      <label htmlFor="">Full Name</label>
      <div>
        <input type="text" name="name" placeholder='Enter full name...' />
        <CiUser className='icon'/>
        </div>    
        <label htmlFor="">Email Address</label>
      <div>
        <input type="email" name="email" placeholder='Enter Email...' />
       <CiMail className='icon'/>
        </div>      
        <label htmlFor="">Subject</label>
      <div>
        <input type="text" name="subject" placeholder='Subject...' />
        <FaRegEdit className='icon'/>
        </div>            
        <label>Message</label>
      <div className='message'>
      <textarea style={{height:'150px', width:"550px", borderRadius:'30px' , padding:"20px", fontSize:"18px"}} name="message">Message...</textarea>
        
        </div>      
                
                
      
      <Button variant="primary" type="submit"onClick={notify} className="button">
        Send Your Message
      </Button>
      <ToastContainer style={{marginTop:"180px", marginRight:'80px'}} />
      </form>

                </div>
            
        </section>
    );
}

export default Contact;
