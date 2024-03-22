import React from "react";
import "./style.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow
} from "mdb-react-ui-kit";
const DeliveryStatus = () => {
  return (
    <>
      <section className="vh-0" style={{ width: "100%" }}>
        <MDBContainer className="py-1 h-100">
          <MDBRow className="justify-content-center align-items-center h-80">
            <MDBCol>
              <MDBCard
                className="card-stepper"
                style={{ borderRadius: "10px", width: "100%", marginLeft: "40%" }}
              >
                <MDBCardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span className="lead fw-normal">Your order has been delivered</span>
                      <span className="text-muted small">by DHFL on 21 Jan, 2024</span>
                    </div>
                    <div>
                      <MDBBtn outline>Track order details</MDBBtn>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="d-flex justify-content-center align-items-center big-dot dot">
                      <MDBIcon icon="check text-white" />
                    </span>
                  </div>

                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-start">
                      <span>15 Mar</span>
                      <span>Order placed</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span>15 Mar</span>
                      <span>Order placed</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <span>15 Mar</span>
                      <span>Order Dispatched</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <span>15 Mar</span>
                      <span>Out for delivery</span>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span>15 Mar</span>
                      <span>Delivered</span>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default DeliveryStatus;
