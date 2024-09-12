import { Carousel } from "react-bootstrap";
import "./CarouselsComponent.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const CarouselsComponent = ({ sliderData }) => {
  return (
    <Carousel className="vh-100 position-relative">
      {sliderData.map((ele, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className=" w-100 vh-100 object-fit-cover"
              src={ele?.imgPath}
              alt={`hero-img-${index}`}
            />
            <Carousel.Caption className="bg-white position-absolute start-50 translate-style w-75 p-1 p-md-2 p-lg-3">
              <h1 className="text-color-gray my-4 mx-1">{ele?.header}</h1>
              <p className="text-color-gray m-0 px-1">{ele?.paragraph}</p>
              <span className="d-inline-block my-4">
                <ButtonComponent btnText={ele?.btnText} />
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselsComponent;
