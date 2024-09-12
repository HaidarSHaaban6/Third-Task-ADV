import { Card, Container } from "react-bootstrap";
import "./DoctorsSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";

const doctorsSectionText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const DoctorsSection = ({ doctorsData }) => {
  return (
    <div className="bg-color-light-main-theme py-4">
      <Container>
        <TitleComponent title="Doctors" text={doctorsSectionText} />
        <div className="d-flex justify-content-center justify-content-sm-between flex-wrap gap-4">
          {doctorsData.map((ele) => {
            return (
              <Card key={ele?.id} className="doctor-card-style">
                <Card.Img variant="top" src={ele?.img} />
                <Card.Body>
                  <Card.Title className="text-color-gray fw-bold">
                    {ele?.name}
                  </Card.Title>
                  <Card.Text className="text-color-light-gray doctor-card-font-size-style">
                    {ele?.specialization}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default DoctorsSection;
