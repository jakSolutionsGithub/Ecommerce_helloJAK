import React from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalLoginRegister = (props: any) => {
  return (
    <Modal {...props}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-box-wrapper">
              <div className="helendo-tabs">
                <Tabs
                  defaultActiveKey={"login"}
                  transition={false}
                  className="nav"
                  role="tablist"
                >
                  <Tab
                    eventKey={"login"}
                    title="Login"
                    
                  >
                    <div className="tab-content content-modal-box">
                      
                        <form action="#" className="account-form-box">
                          <h6>Login your account</h6>
                          <div className="single-input">
                            <input type="text" placeholder="Username" />
                          </div>
                          <div className="single-input">
                            <input type="password" placeholder="Password" />
                          </div>
                          <div className="checkbox-wrap mt-10">
                            <label className="label-for-checkbox inline mt-15">
                              <input
                                className="input-checkbox"
                                name="rememberme"
                                type="checkbox"
                                id="rememberme"
                                value="forever"
                              />{" "}
                              <span>Remember me</span>
                            </label>
                            <Link to="" className=" mt-10">
                              Lost your password?
                            </Link>
                          </div>
                          <div className="button-box mt-25">
                            <Link to="" className="btn btn--full btn--black">
                              Log in
                            </Link>
                          </div>
                        </form>
                      </div>
                    
                  </Tab>
                  <Tab
                    eventKey={"register"}
                    title="Our Register"
                   
                  >
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
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account, and for other purposes described in
                          our{" "}
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
                  </Tab>
                </Tabs>
              </div>
              {/* <div className="tab-content content-modal-box">
                  <div
                    className="tab-pane fade show active"
                    id="tab_list_06"
                    role="tabpanel"
                  >
                    <form action="#" className="account-form-box">
                      <h6>Login your account</h6>
                      <div className="single-input">
                        <input type="text" placeholder="Username" />
                      </div>
                      <div className="single-input">
                        <input type="password" placeholder="Password" />
                      </div>
                      <div className="checkbox-wrap mt-10">
                        <label className="label-for-checkbox inline mt-15">
                          <input
                            className="input-checkbox"
                            name="rememberme"
                            type="checkbox"
                            id="rememberme"
                            value="forever"
                          />{" "}
                          <span>Remember me</span>
                        </label>
                        <Link to="#" className=" mt-10">
                          Lost your password?
                        </Link>
                      </div>
                      <div className="button-box mt-25">
                        <Link to="#" className="btn btn--full btn--black">
                          Log in
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab_list_07"
                    role="tabpanel"
                  >
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
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our{" "}
                        <Link
                          to="#"
                          className="privacy-policy-link"
                          target="_blank"
                        >
                          privacy policy
                        </Link>
                        .
                      </p>
                      <div className="button-box mt-25">
                        <a href="/" className="btn btn--full btn--black">
                          Register
                        </a>
                      </div>
                    </form>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

function Login() {
  return (
    <div className="tab-content content-modal-box">
      <div
        className="tab-pane fade show active"
        id="tab_list_06"
        role="tabpanel"
      >
        <form action="#" className="account-form-box">
          <h6>Login your account</h6>
          <div className="single-input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="single-input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="checkbox-wrap mt-10">
            <label className="label-for-checkbox inline mt-15">
              <input
                className="input-checkbox"
                name="rememberme"
                type="checkbox"
                id="rememberme"
                value="forever"
              />{" "}
              <span>Remember me</span>
            </label>
            <Link to="" className=" mt-10">
              Lost your password?
            </Link>
          </div>
          <div className="button-box mt-25">
            <Link to="" className="btn btn--full btn--black">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalLoginRegister;
