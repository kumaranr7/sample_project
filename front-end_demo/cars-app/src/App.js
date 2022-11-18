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

import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Create from "./pages/Create";



export default function App() {

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>

      <Row>
        <nav>
          <Link to="/home"> Home </Link> |{" "}
          <Link to="/new">Create new </Link>
        </nav>
      </Row>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<Create />} />
        </Routes>
    </Space>
  );
}
