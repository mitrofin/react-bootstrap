import React from "react";
import { CardImg, Col, Container, Row, Card, Button } from "react-bootstrap";
import Slider from "./Slider";
import slider1 from "../images/1-min.jpeg";
import Jumbotron from "./Jumbotron";
import s from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <Slider />;
      <Container className={s.block2} variant="black">
        <Row>
          <Col>
            <Card style={{ width: "20rem" }}>
              <CardImg src={slider1}></CardImg>
              <Card.Body>
                <Card.Title>first card</Card.Title>
                <Card.Text>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  a, repellendus aspernatur laborum doloribus sit tempora modi
                  commodi!{" "}
                </Card.Text>
                <Button variant="primary">Lern more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <CardImg src={slider1}></CardImg>
              <Card.Body>
                <Card.Title>second card</Card.Title>
                <Card.Text>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  a, repellendus aspernatur laborum doloribus sit tempora modi
                  commodi!{" "}
                </Card.Text>
                <Button variant="primary">Lern more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <CardImg src={slider1}></CardImg>
              <Card.Body>
                <Card.Title>third card</Card.Title>
                <Card.Text>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  a, repellendus aspernatur laborum doloribus sit tempora modi
                  commodi!{" "}
                </Card.Text>
                <Button variant="primary">Lern more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
      <Container style={{ marginBottom: "30px", marginTop: "30px" }}>
        <Row>
          <Col md={7}>
            <img src={slider1} alt="foto" height={400} />
          </Col>
          <Col md={5}>
            <h2>Title section</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo hic rerum cum iste! Repellat tempore optio temporibus
              blanditiis exercitationem asperiores vel explicabo reiciendis. Aut
              aliquid, pariatur fugit voluptas culpa rerum!Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Explicabo hic rerum cum
              iste! Repellat tempore optio temporibus blanditiis exercitationem
              asperiores vel explicabo reiciendis. Aut aliquid, pariatur fugit
              voluptas culpa rerum!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
