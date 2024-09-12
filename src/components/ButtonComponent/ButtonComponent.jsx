import { Button } from "react-bootstrap";
import "./ButtonComponent.css";

const ButtonComponent = ({ btnText }) => {
  return (
    <Button
      variant="primary"
      className="btn-padding-style bg-color-main-theme btn-style"
    >
      {btnText}
    </Button>
  );
};

export default ButtonComponent;
