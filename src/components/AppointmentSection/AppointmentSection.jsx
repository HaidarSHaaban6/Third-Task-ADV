import { Button, Card, Container } from "react-bootstrap";
import "./AppointmentSection.css";
import CardComponent from "../CardComponent/CardComponent";

const AppointmentSection = ({ appointmentCards }) => {
  return (
    // <div className="vh-100">
    <>
      <Container>
        <div className="d-flex gap-4 flex-wrap justify-content-md-between justify-content-center my-6">
          {appointmentCards.map((ele, index) => {
            return <CardComponent CardContent={ele} key={index} />;
          })}
        </div>
      </Container>
      <div className="bg-color-main-theme">
        <Container className="d-flex align-items-center flex-column py-6">
          <h2 className="text-white">In an emergency? Need help now?</h2>
          <p className="m-0 text-center text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi,
            sed dicta ad eum veniam quos pariatur explicabo ipsa! Repellendus
            perspiciatis error cumque totam, veritatis maiores quibusdam quae
            soluta molestias laboriosam facere iusto eveniet porro.
          </p>
          <Button
            variant="outline-light"
            className="px-5 py-3 my-4 btn-border-style"
          >
            Make an Appointment
          </Button>
        </Container>
      </div>
    </>
    // </div>
  );
};

export default AppointmentSection;
