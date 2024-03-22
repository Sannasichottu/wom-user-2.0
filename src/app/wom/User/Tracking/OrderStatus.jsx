import React from "react";
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Box, Container } from "@mui/material";
import { Breadcrumb } from "app/components";

const OrderStatus = () => {
  return (
    <Container>
      <Box style={{ marginTop: "50px", marginLeft: "0" }} className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Status", path: "/material" }, { name: "Order Status" }]}
        />
      </Box>
      <MDBTable
        align="middle"
        style={{ padding: "80px", marginLeft: "30px", marginRight: "150px" }}
      >
        {" "}
        <MDBTableHead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Model Number</th>

            <th scope="col">Status</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://www.shutterstock.com/image-photo/new-car-engine-isolated-on-600nw-1892153098.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px", border: "1px solid black" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Petrol</p>
                  <p className="text-muted mb-0">
                    Zhou Maomao5-speed R151 manual 6-speed AC60 automatic
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">2TR-FE</p>
              <p className="text-muted mb-0">Petrol</p>
            </td>
            <td>
              <MDBBadge color="success" pill style={{ padding: "10px" }}>
                Success
              </MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/8cc9595364efa0fc-org-1584048843.jpg?resize=640:*"
                  alt=""
                  style={{ width: "45px", height: "45px", border: "1px solid black" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Petrol</p>
                  <p className="text-muted mb-0">5-speed R151 manual 6-speed RC60 manual</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">2GD-FTV</p>
              <p className="text-muted mb-0">Petrol</p>
            </td>
            <td>
              <MDBBadge color="primary" pill style={{ padding: "10px" }}>
                Processing
              </MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://s1.cdn.autoevolution.com/images/news/five-smallest-displacement-engines-found-in-production-cars-of-2016-113020_1.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px", border: "1px solid black" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Diesel</p>
                  <p className="text-muted mb-0">
                    5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">1GD-FTV</p>
              <p className="text-muted mb-0">Diesel</p>
            </td>
            <td>
              <MDBBadge color="warning" pill style={{ padding: "10px" }}>
                Waiting
              </MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://www.shutterstock.com/image-photo/new-car-engine-isolated-on-600nw-1892153098.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px", border: "1px solid black" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Petrol</p>
                  <p className="text-muted mb-0">
                    Zhou Maomao5-speed R151 manual 6-speed AC60 automatic
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">2TR-FE</p>
              <p className="text-muted mb-0">Petrol</p>
            </td>
            <td>
              <MDBBadge color="success" pill style={{ padding: "10px" }}>
                Success
              </MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/8cc9595364efa0fc-org-1584048843.jpg?resize=640:*"
                  alt=""
                  style={{ width: "45px", height: "45px", border: "1px solid black" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Petrol</p>
                  <p className="text-muted mb-0">5-speed R151 manual 6-speed RC60 manual</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">2GD-FTV</p>
              <p className="text-muted mb-0">Petrol</p>
            </td>
            <td>
              <MDBBadge color="primary" pill style={{ padding: "10px" }}>
                Processing
              </MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://s1.cdn.autoevolution.com/images/news/five-smallest-displacement-engines-found-in-production-cars-of-2016-113020_1.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px", border: "1px solid black" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Diesel</p>
                  <p className="text-muted mb-0">
                    5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">1GD-FTV</p>
              <p className="text-muted mb-0">Diesel</p>
            </td>
            <td>
              <MDBBadge color="warning" pill style={{ padding: "10px" }}>
                Waiting
              </MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://www.shutterstock.com/image-photo/new-car-engine-isolated-on-600nw-1892153098.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px", border: "1px solid black" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Petrol</p>
                  <p className="text-muted mb-0">
                    Zhou Maomao5-speed R151 manual 6-speed AC60 automatic
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">2TR-FE</p>
              <p className="text-muted mb-0">Petrol</p>
            </td>
            <td>
              <MDBBadge color="success" pill style={{ padding: "10px" }}>
                Success
              </MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/8cc9595364efa0fc-org-1584048843.jpg?resize=640:*"
                  alt=""
                  style={{ width: "45px", height: "45px", border: "1px solid black" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Petrol</p>
                  <p className="text-muted mb-0">5-speed R151 manual 6-speed RC60 manual</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">2GD-FTV</p>
              <p className="text-muted mb-0">Petrol</p>
            </td>
            <td>
              <MDBBadge color="primary" pill style={{ padding: "10px" }}>
                Processing
              </MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://s1.cdn.autoevolution.com/images/news/five-smallest-displacement-engines-found-in-production-cars-of-2016-113020_1.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px", border: "1px solid black" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Diesel</p>
                  <p className="text-muted mb-0">
                    5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">1GD-FTV</p>
              <p className="text-muted mb-0">Diesel</p>
            </td>
            <td>
              <MDBBadge color="warning" pill style={{ padding: "10px" }}>
                Waiting
              </MDBBadge>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </Container>
  );
};

export default OrderStatus;
