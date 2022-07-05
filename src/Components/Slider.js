import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import sanset1 from "../images/1-min.jpeg";
import sanset2 from "../images/2-min.jpeg";
import sanset3 from "../images/3-min.jpeg";
import s from "./Slider.module.css";

import {} from "react-router-dom";

export default function Slider() {
  return (
    <>
      <Carousel fade controls={false} keyboard={true}>
        <CarouselItem className={s.caruselItem} interval={3000}>
          <img className="d-block w-100" src={sanset1} alt="sanset" />
          <Carousel.Caption>
            <h3>first slide</h3>
            <p>beautiful sanset</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem className={s.caruselItem} interval={3000}>
          <img className="d-block w-100" src={sanset2} alt="sanset" />
          <Carousel.Caption>
            <h3>second slide</h3>
            <p>beautiful sanset</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem className={s.caruselItem} interval={3000}>
          <img className="d-block w-100" src={sanset3} alt="sanset" />
          <Carousel.Caption>
            <h3>third slide</h3>
            <p>beautiful sanset</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </>
  );
}
