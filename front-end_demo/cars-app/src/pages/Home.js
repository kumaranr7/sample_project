import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Divider,
  Typography,
  Space,
  Form,
  Input,
  Button,
  Card,
} from "antd";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import CarCard from "../Components/CarCard";
const { Title } = Typography;

export default function Home() {
  const [cars, setCars] = useState(null);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars/")
      .then((response) => {
        setCars(response.data);
        setStatus(true);
      })
      .catch(() => {
        console.log("API call Failed...!!!");
        setStatus(false);
      });
  }, []);
  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row">
          <Title>Cars List</Title>
        </Col>
      </Row>
      <Divider orientation="center">Items</Divider>

      <Row gutter={16}>
        {status &&
          cars.map((carObj) => {
            return (
              <CarCard
                key={carObj._id}
                make={carObj.make}
                model={carObj.model}
                year={carObj.year}
              />
            );
          })}
      </Row>
    </div>
  );
}
