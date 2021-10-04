import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="section ">
      <Carousel>
        <Carousel.Item>
          <img
            height='700px'
            className="d-block w-100"
            src="https://cdn.10minuteschool.com/images/skills/thumbnails-v3/Spoken%20English_Landscape.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='700px'
            className="d-block w-100"
            src="https://cdn.10minuteschool.com/images/skills/thumbnails-v3/24%20Ghontay%20Quran_Landscape.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='700px'
            className="d-block w-100"
            src="https://cdn.10minuteschool.com/images%2Fskills%2Fjpeg%2FEnglish-Grammar-Crash-Course---Title-Thumbnail.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='700px'
            className="d-block w-100"
            src="https://cdn.10minuteschool.com/images/skills/jpeg/Kids-English---Title-thumbnail.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='700px'
            className="d-block w-100"
            src="https://cdn.10minuteschool.com/images/skills/thumbnails-v3/Programming-for-Kids---Title-Thumbnail.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='700px'
            className="d-block w-100"
            src="https://cdn.10minuteschool.com/images/skills/jpeg/Shundor-O-Druto-Haater-Lekha---Landscape-v2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='700px'
            className="d-block w-100"
            src="https://cdn.10minuteschool.com/images/skills/thumbnails-v3/Facebook%20Marketing_Landscape.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='700px'
            className="d-block w-100"
            src="https://cdn.10minuteschool.com/images%2Fskills%2Fjpeg%2FGhore-Boshe-Freelancing---Title-thumbnail.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
