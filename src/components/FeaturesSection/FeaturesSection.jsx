import { Container } from "react-bootstrap";
import "./FeaturesSection.css";

const FeaturesSection = ({ featureImg, featuresParagraph }) => {
  return (
    <Container className="d-flex flex-wrap py-6">
      <div className="width-style-for-features-section mb-4">
        <img
          src={featureImg}
          className="img-fluid w-100 object-fit-cover h-100 pe-lg-4"
          alt="feature-img"
        />
      </div>
      <div className="width-style-for-features-section ps-lg-5">
        <h2 className="text-color-gray under-line-style-features-header">
          Lorem ipsum dolor sit amet consectetur sit amet consectetur
        </h2>
        <p className="text-color-gray my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptas ratione reprehenderit. Consectetur inventore voluptatum
          mollitia aliquid? Iusto odit illo quia esse. Debitis, repellendus.
          Maxime cumque voluptatum officiis, accusantium soluta quas quod
          maiores consectetur a!
        </p>
        <div>
          {featuresParagraph.map((ele, index) => {
            return (
              <div
                className={
                  index === featuresParagraph.length - 1
                    ? "d-flex gap-2"
                    : "d-flex gap-2 my-5"
                }
                key={index}
              >
                <span className="icon-features-container-style d-flex justify-content-center align-items-center p-3 text-color-main-theme ">
                  {ele?.icon}
                </span>
                <div className="ps-4 text-color-gray">
                  <h5 className="mb-2">{ele?.header}</h5>
                  <p>{ele?.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default FeaturesSection;
