import React from 'react';
import './styles.css'; // Assuming you have a styles.css file

const RegistrationForm = () => {
  const validation = () => {
    // Implement your validation logic here
    return true; // Replace this with your actual validation result
  };

  return (
    <div>
      <div className="container">
        <div className="form-box">
          <form action="" name="Formfill" onSubmit={() => validation()}>
            <p id="result">head</p>
            <h2>REGISTRATION</h2>
            <div className="input-box">
              <i className='bx bxs-user'></i>
              <input type="text" name="Username" placeholder="Username" />
            </div>
            <div className="input-box">
              <i className='bx bxs-envelope'></i>
              <input type="email" name="Email" placeholder="Email" />
            </div>
            <div className="input-box">
              <i className='bx bxs-lock-alt'></i>
              <input type="password" name="Password" placeholder="Password" />
            </div>
            <div className="input-box">
              <i className='bx bxs-lock'></i>
              <input type="password" name="Confirm Password" placeholder="Confirm Password" />
            </div>
            <div className="button">
              <input type="submit" className="btn" value="Register" />
            </div>
            <div className="group">
              <span>FORGET PASSWORD</span>
              <span><a href='http://127.0.0.1:3000/index'>LOGIN</a></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;