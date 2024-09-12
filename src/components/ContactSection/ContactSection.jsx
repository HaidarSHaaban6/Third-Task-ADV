import { Container, Form } from "react-bootstrap";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./ContactSection.css";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const contactText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const ContactSection = ({ contactData: [{ mapSrc, address, tel, email }] }) => {
  return (
    <>
      <TitleComponent title="Contact" text={contactText} />
      <iframe
        src={mapSrc}
        className="contact-section-map-style mb-5"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Container className="d-flex justify-content-between flex-wrap gap-sm-3">
        <div className="w-49-style">
          <div className="row gap-4 ms-0 me-0 justify-content-center justify-content-sm-between">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center contact-card-box-shadow-style py-4">
              <span className="d-flex justify-content-center align-items-center contact-icon-style text-color-main-theme fs-3">
                <CiLocationOn />
              </span>
              <h5 className="text-color-gray my-2">Address</h5>
              <p className="text-color-gray">{address}</p>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center contact-card-box-shadow-style py-4 w-47-style">
              <span className="d-flex justify-content-center align-items-center contact-icon-style text-color-main-theme fs-3">
                <BsTelephone />
              </span>
              <h5 className="text-color-gray my-2">Call Us</h5>
              <p className="text-color-gray">{tel}</p>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center contact-card-box-shadow-style py-4 w-47-style">
              <span className="d-flex justify-content-center align-items-center contact-icon-style text-color-main-theme fs-3">
                <TfiEmail />
              </span>
              <h5 className="text-color-gray my-2">Email Us</h5>
              <p className="text-color-gray">{email}</p>
            </div>
          </div>
        </div>
        <div className="w-49-style contact-card-box-shadow-style padding-contact-inputs-style mb-4">
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <Form.Control
                className="input-style"
                type="text"
                placeholder="Normal text"
              />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <Form.Control
                className="input-style"
                type="text"
                placeholder="Normal text"
              />
            </div>
            <div className="col-12 mb-4">
              <Form.Control
                className="input-style"
                type="text"
                placeholder="Normal text"
              />
            </div>
            <div className="col-12 mb-4">
              <Form.Control className="textarea-style" as="textarea" />
            </div>
          </div>
          <div className="text-center">
            <ButtonComponent btnText="Send Message" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactSection;
