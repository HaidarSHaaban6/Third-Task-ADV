import "./AboutUsSection.css";
import { Container } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { VscCheckAll } from "react-icons/vsc";
import ClinicInfoCardComponent from "../ClinicInfoCardComponent/ClinicInfoCardComponent";
import TitleComponent from "../TitleComponent/TitleComponent";

const text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const AboutUsSection = ({
  checkedParagraph,
  clinicInfoCardData,
  aboutUsImg,
}) => {
  return (
    <Container>
      <TitleComponent title="About Us" text={text} />
      <div className="d-flex flex-wrap pb-4">
        <div className="width-style-for-about-us-section position-relative">
          <img
            className="img-fluid w-100 object-fit-cover height-style-for-about-us-section-img"
            src={aboutUsImg}
            alt=""
          />
          <span className="position-absolute top-50 start-50 translate-middle bg-color-main-theme-with-opacity width-outer-play-icon d-flex justify-content-center align-items-center rounded-circle">
            <span className="bg-color-main-theme width-inner-play-icon d-flex justify-content-center align-items-center rounded-circle">
              <FaPlay className="text-light" />
            </span>
          </span>
        </div>

        <div className="width-style-for-about-us-section ps-0 ps-lg-4">
          <h3 className="text-color-gray fw-bold">
            Voluptatem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-color-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestias deserunt excepturi atque odio.
          </p>
          <div className="my-4">
            {checkedParagraph.map((ele, index) => {
              return (
                <div key={index} className="d-flex gap-2">
                  <span className="d-inline-block">
                    <VscCheckAll className="text-color-main-theme font-size-style" />
                  </span>
                  <p className="text-color-gray">{ele.text}</p>
                </div>
              );
            })}
          </div>
          <p className="text-color-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt
            inventore enim hic vel laboriosam esse velit, maxime ad corrupti.
          </p>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-4 my-6">
        {clinicInfoCardData.map((ele, index) => {
          return (
            <ClinicInfoCardComponent
              key={index}
              icon={ele?.icon}
              num={ele?.num}
              paragraph={ele?.paragraph}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default AboutUsSection;
