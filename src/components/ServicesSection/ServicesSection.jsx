import { Card, Container } from "react-bootstrap";
import "./ServicesSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";

const servicesSectionText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const ServicesSection = ({ servicesData }) => {
  return (
    <Container className="mb-6">
      <TitleComponent title="Services" text={servicesSectionText} />
      <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-md-between">
        {servicesData.map((ele, index) => {
          return (
            <Card key={index} className="p-4 services-section-card">
              <Card.Body className="p-0 d-flex flex-column align-items-center justify-content-center">
                <Card.Title className="fs-1 text-color-main-theme services-section-card-icon rounded-circle d-flex justify-content-center align-items-center">
                  {ele.icon}
                </Card.Title>
                <Card.Title className="text-color-gray fw-bold my-3 services-section-card-header fs-4 mb-4">
                  {ele.header}
                </Card.Title>
                <Card.Text className="text-color-gray text-center">
                  {ele.paragraph}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default ServicesSection;
