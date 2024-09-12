import { Container, FloatingLabel, Form } from "react-bootstrap";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./MakeAnAppointmentSection.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const makeAnAppointmentText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const MakeAnAppointmentSection = ({ doctorsData, departmentData }) => {
  return (
    <div className="bg-color-light-main-theme pt-3 pb-5">
      <Container>
        <TitleComponent
          title="Make An Appointment"
          text={makeAnAppointmentText}
        />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Form.Control
              type="text"
              className="input-style"
              placeholder="Your Name"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Form.Control
              type="email"
              className="input-style"
              placeholder="Your Email"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Form.Control
              type="number"
              className="input-style"
              placeholder="Your Phone"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Form.Control type="date" className="input-style" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Form.Select
              className="input-style"
              aria-label="Default select example"
            >
              <option>Select Department</option>
              {departmentData.map((ele) => {
                return (
                  <option key={ele.id} value={ele.name}>
                    {ele.name}
                  </option>
                );
              })}
            </Form.Select>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Form.Select
              className="input-style"
              aria-label="Default select example"
            >
              <option>Select Doctor</option>
              {doctorsData.map((ele) => {
                return (
                  <option key={ele.id} value={ele.name}>
                    {ele.name}
                  </option>
                );
              })}
            </Form.Select>
          </div>
          <div className="col-12">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Message (Optional)"
              className="label-style"
            >
              <Form.Control className="textarea-style" as="textarea" />
            </FloatingLabel>
          </div>
        </div>
        <div className="text-center my-4">
          <ButtonComponent btnText="Make an Appointment" />
        </div>
      </Container>
    </div>
  );
};

export default MakeAnAppointmentSection;
