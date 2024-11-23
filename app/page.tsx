import { Button, Col, Divider, FloatButton, Pagination, Row, Space } from "antd";
import React from "react";
import { CustomerServiceOutlined } from '@ant-design/icons';
import MenubarModule from "./components/menubar-comp";
import PaginationModule from "./components/pagination-comp";
import FloatButtonModule from "./components/float-button-comp";


export default function Home() {
  return (
    <>
    <MenubarModule />
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <PaginationModule/>
      </Col>
      <Col span={8}></Col>
    </Row>
   
   <FloatButtonModule />

    </>
  );
}
