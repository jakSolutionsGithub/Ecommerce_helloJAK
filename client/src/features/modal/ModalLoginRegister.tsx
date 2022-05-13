import React from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";
import Login from "../client/Login";
import Register from "../client/Register";

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
                  <Tab eventKey={"login"} title="Login">
                    <Login />
                  </Tab>
                  <Tab eventKey={"register"} title="Our Register">
                    <Register />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};



export default ModalLoginRegister;
