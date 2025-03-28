import React, { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Star from "./Star";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { Context } from "..";
import { toJS } from "mobx";

const DeviceItem = ({ deviceProp }) => {
  const navigate = useNavigate();
  const { device } = useContext(Context);
  const curr = toJS(device._brand).filter(
    (item) => item.id == deviceProp.brandId
  );

  return (
    <Col md={3} style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{ cursor: "pointer", padding: 5 }}
        onClick={() => navigate(DEVICE_ROUTE + "/" + deviceProp.id)}
      >
        <Image
          style={{ padding: 15, width: 150, height: 150 }}
          src={process.env.REACT_APP_API_URL + "/" + deviceProp.img}
        />
        <div>
          <div className="text-black-50" style={{ textAlign: "center" }}>
            {" "}
            {curr[0]?.name}
          </div>

          <div className="d-flex justify-content-between align-center">
            <div>{deviceProp.rating}</div>
            <div style={{ alignItems: "center", display: "flex" }}>
              <Star rating={deviceProp.rating} />
            </div>
          </div>
          <div>{deviceProp.name}</div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
