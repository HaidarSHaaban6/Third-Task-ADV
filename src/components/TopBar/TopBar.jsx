import { Container } from "react-bootstrap";
import { CiClock2 } from "react-icons/ci";
import "./TopBar.css";
import { IoIosPhonePortrait } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="bg-color-main-theme py-2 w-100 z-3">
      <Container className="d-flex align-items-center justify-content-md-between justify-content-center">
        <a
          href="#"
          className="text-decoration-none text-light d-none d-md-inline-block"
        >
          <CiClock2 className="me-1 fs-4" />
          Monday-Saturday, 8AM to 10PM
        </a>

        <a
          href="tel:+1 5589 55488 55"
          className="text-decoration-none text-light"
        >
          <IoIosPhonePortrait className="me-1 fs-4" />
          Call us now +1 5589 55488 55
        </a>
      </Container>
    </div>
  );
};

export default TopBar;
