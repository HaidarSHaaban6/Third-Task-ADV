import { Container } from "react-bootstrap";
import "./Footer.css";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({
  footerLinksData,
  footerMainColumnData: [
    { header, locationStreet, locationCity, phone, email, iconList },
  ],
}) => {
  return (
    <footer className="bg-color-light-main-theme">
      <Container className="pt-5 pb-5">
        <div className="row">
          <div className="col-6 col-md-4 col-sm-6 col-style">
            <h2 className="mb-5">
              <a className="text-decoration-none text-color-gray" href="#">
                {header}
              </a>
            </h2>
            <p className="fw-medium text-color-semi-light-gray mb-2">
              {locationStreet}
            </p>
            <p className="fw-medium text-color-semi-light-gray mb-4">
              {locationCity}
            </p>
            <p className="mb-2">
              <span className="text-color-gray me-1 fw-bold">Phone:</span>
              <a
                className="text-decoration-none text-color-semi-light-gray"
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            </p>
            <p className="mb-4">
              <span className="text-color-gray me-1 fw-bold">Email:</span>
              <a
                className="text-decoration-none text-color-semi-light-gray"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </p>
            <ul className="list-unstyled d-flex align-items-center justify-content-between footer-contact-icon-container-style">
              {iconList.map((ele, index) => {
                return (
                  <li key={index}>
                    <a
                      className="text-decoration-none d-flex justify-content-center align-items-center footer-contact-icon-style text-color-gray"
                      href="#"
                    >
                      {ele}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {footerLinksData.map((ele, index) => {
            return (
              <div key={index} className="col-6 col-lg-2 col-sm-4 col-style">
                <h4 className="mb-3 text-color-gray">{ele?.header}</h4>
                <ul className="list-unstyled d-flex flex-column gap-3">
                  <li>
                    <a
                      className="text-decoration-none text-color-semi-light-gray"
                      href="#"
                    >
                      {ele?.link1}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-color-semi-light-gray"
                      href="#"
                    >
                      {ele?.link2}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-color-semi-light-gray"
                      href="#"
                    >
                      {ele?.link3}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-color-semi-light-gray"
                      href="#"
                    >
                      {ele?.link4}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-color-semi-light-gray"
                      href="#"
                    >
                      {ele?.link5}
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
