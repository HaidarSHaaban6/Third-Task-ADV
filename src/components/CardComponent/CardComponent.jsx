import { Card } from "react-bootstrap";
import "./CardComponent.css";

const CardComponent = ({ CardContent }) => {
  return (
    <Card className="card-style p-4">
      <Card.Body className="d-flex flex-column justify-content-center p-0">
        <Card.Title className="fs-1 text-color-main-theme">
          {CardContent.icon}
        </Card.Title>
        <Card.Title className="text-color-gray fw-bold my-3">
          {CardContent.header}
        </Card.Title>
        <Card.Text className="text-color-gray">
          {CardContent.paragraph}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
