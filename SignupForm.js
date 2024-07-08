import React, { useState } from 'react';
import './App.css'

const SignupForm = () => {
  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  return (
    <div>
      {!formVisible && (
        <center>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Get Started
        </button>
        </center>
      )}
      {formVisible && (
        <div className="container mt-5">
          <center>
          <h2>Create a new account</h2>
          <h4 className='fw-normal'>Enter your details and signup</h4>
          </center>
          
          <form>
            <div className=' row'>
            <div className="form-group col">
              
              <input type="text" className="form-control" placeholder='First Name*' required />
            </div>
            <div className="form-group col">
              
              <input type="text" className="form-control" placeholder='Last Name*' required />
            </div>
            </div>
            <br />
            <div className="form-group">
              
              <input type="email" className="form-control" placeholder='Email*' required />
            </div>
            <br />
            <div className=" form-group">
              
              <input type="password" className="form-control"  placeholder='Password*'required />
            </div>
            <br />
           <div className='row'>
           <div className="form-group col">
                <label className='date-label'>Date of birth</label>
                <input type="date" className="form-control " required />
              </div>
            <div className="form-group col">
              
              <select className="form-control" required>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
           </div>
           <br />
            <div className="form-group">
              
              <input type="text" className="form-control" placeholder='Mobile Number' />
            </div>
            <div className="form-group form-check mt-2">
              <input type="checkbox" className="form-check-input" required />
              <label className="form-check-label">I agree to terms and conditions</label>
            </div>
            <button type="submit" className="btn btn-success container mt-2">Sign up</button>
          </form>
          <center className='mt-2'><p>Already have an account?<span className='custom-btn'> Login</span></p></center>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
