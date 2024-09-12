import { Card, Col, Container, Row } from "react-bootstrap";
import "./TestimonialsSection.css";
import { useEffect, useState } from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonialsTetx =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const TestimonialsSection = ({ testimonialsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const updateCardsPerView = () => {
    if (window.innerWidth >= 992) {
      setCardsPerView(3);
    } else if (window.innerWidth >= 768) {
      setCardsPerView(2);
    } else {
      setCardsPerView(1);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalCards = testimonialsData.length;

  const getVisibleCards = () => {
    const end = Math.min(currentIndex + cardsPerView, totalCards);
    return testimonialsData.slice(currentIndex, end);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <Container className="position-relative my-6">
      <TitleComponent title="Testimonials" text={testimonialsTetx} />
      <Row className="d-flex justify-content-center overflow-hidden">
        {getVisibleCards().map((card, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="my-3">
            <Card className="remove-border">
              <Card.Body className="p-0 text-color-semi-light-gray">
                <Card.Text className="bg-color-light-main-theme p-4 position-relative before-and-after-element-style">
                  <FaQuoteLeft className="text-color-main-theme me-3 opacity-50" />
                  {card?.text}
                  <FaQuoteRight className="text-color-main-theme ms-3 opacity-50" />
                </Card.Text>
                <Card.Img
                  className="testimonials-card-img-width-style rounded-circle ms-4"
                  variant="top"
                  src={card.image}
                />
                <Card.Text className="mb-0 mx-4 mt-3 fw-bold fs-5 text-color-gray">
                  {card?.name}
                </Card.Text>
                <Card.Text className="mx-4">{card?.job}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-3 position-relative">
        {testimonialsData.slice(0, totalCards).map((_, index) => (
          <div
            key={index}
            className={`indicator d-inline-block rounded-circle  mx-1 ${
              index === currentIndex ? "active" : "not-active"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
