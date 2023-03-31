import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import StaredProjectCard from './staredProjectCard.js';
import StaredAPI from '../../utils/staredAPI.js';
import "./style.css";

export default function PinnedRepoCarousel() {

  const [stared, setStared] = useState([]);

  useEffect(() => {
    StaredAPI().then((response) => { setStared(response.data) })
  }, [])

  const slideOne = stared.slice(0, 2);
  const slideTwo = stared.slice(2, 4);
  const slideThree = stared.slice(4, 6);

  console.log(slideOne)

  return (
    <Carousel variant="dark" id="carousel">
      <Carousel.Item interval={3000} className="carousel-slide">
        <div class="row justify-content-around">
          {slideOne.map(f => <StaredProjectCard
            name={f.repo.split("-").join(" ")}
            info={f.description}
            site={f.website}
            github={f.link}
          />)}
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="carousel-slide">
        <div class="row justify-content-around">
          {slideTwo.map(f => <StaredProjectCard
            name={f.repo.split("-").join(" ")}
            info={f.description}
            site={f.website}
            github={f.link}
          />)}
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="carousel-slide">
        <div class="row justify-content-around">
          {slideThree.map(f => <StaredProjectCard
            name={f.repo.split("-").join(" ")}
            info={f.description}
            site={f.website}
            github={f.link}
          />)}
        </div>
      </Carousel.Item>
    </Carousel>
  );
}