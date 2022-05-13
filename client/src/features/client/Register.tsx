import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="tab-content content-modal-box">
      <form action="#" className="account-form-box">
        <h6>Register An Account</h6>
        <div className="single-input">
          <input type="text" placeholder="Username" />
        </div>
        <div className="single-input">
          <input type="text" placeholder="Email address" />
        </div>
        <div className="single-input">
          <input type="password" placeholder="Password" />
        </div>
        <p className="mt-15">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <Link to="" className="privacy-policy-link">
            privacy policy
          </Link>
          .
        </p>
        <div className="button-box mt-25">
          <Link to="" className="btn btn--full btn--black">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
