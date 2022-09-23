import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../assets/4b.png'

function Footer() {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        {/* <SuscribeForm /> */}
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            {/* acá las redes sociales */}
          </div>
          <p> © Copyright 2022. All Rights Reserved 4B programing</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
