import { Card } from "react-bootstrap";
import "./ClinicInfoCardComponent.css";

const ClinicInfoCardComponent = ({ icon, num, paragraph }) => {
  return (
    <Card className="card-style-clinic-info p-4">
      <Card.Body className="d-flex justify-content-start align-items-center gap-4 p-0">
        <Card.Title className="fs-1 text-color-main-theme">{icon}</Card.Title>
        <div className="card-text-container">
          <Card.Text className="text-color-gray fs-1 m-0 fw-bold">
            {num}
          </Card.Text>
          <Card.Text className="text-color-gray">{paragraph}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ClinicInfoCardComponent;
