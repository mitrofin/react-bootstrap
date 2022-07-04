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
      <Container bg="dark" variant="dark">
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
      <Container>
        <div className={s.jumbo}>
          <div className={s.overlay}></div>
          <h1>React-Bootstrap</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            hic rerum cum iste! Repellat tempore optio temporibus blanditiis
            exercitationem asperiores vel explicabo reiciendis. Aut aliquid,
            pariatur fugit voluptas culpa rerum!
          </p>
        </div>
        ;
      </Container>
    </>
  );
};
