import { Card, Col, Container, Row } from "react-bootstrap";
import "./GallerySectoin.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import { useEffect, useState } from "react";

const galleryText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const GallerySectoin = ({ galleryData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(0);

  const updateCardsPerView = () => {
    if (window.innerWidth >= 992) {
      setCardsPerView(5);
    } else if (window.innerWidth >= 768) {
      setCardsPerView(3);
    } else {
      setCardsPerView(1);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalCards = galleryData.length;

  const getVisibleCards = () => {
    let visibleCards = [];
    const halfCards = Math.floor(cardsPerView / 2);

    for (let i = -halfCards; i <= halfCards; i++) {
      const circularIndex = (currentIndex + i + totalCards) % totalCards;
      visibleCards.push(galleryData[circularIndex]);
    }

    return visibleCards;
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container className="position-relative my-6">
      <TitleComponent title="Gallery" text={galleryText} />

      <Row className="d-flex justify-content-center overflow-hidden">
        {getVisibleCards().map((image, index) => (
          <Col
            key={index}
            lg={2}
            md={4}
            sm={12}
            className={`my-3 ${
              index === Math.floor(cardsPerView / 2) ? "active-img-col" : ""
            }`}
          >
            <Card
              className={`remove-border ${
                index === Math.floor(cardsPerView / 2) ? "active-img" : ""
              }`}
              onClick={() =>
                goToSlide(
                  (currentIndex +
                    index -
                    Math.floor(cardsPerView / 2) +
                    totalCards) %
                    totalCards
                )
              }
            >
              <Card.Body className="p-0 m-1">
                <Card.Img
                  className="gallery-active-img-style"
                  variant="top"
                  src={image?.img}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-3 position-relative">
        {Array.from({ length: totalCards }).map((_, index) => (
          <div
            key={index}
            className={`indicator d-inline-block rounded-circle mx-1 ${
              index === currentIndex ? "active" : "not-active"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default GallerySectoin;
