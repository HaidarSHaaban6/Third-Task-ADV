import { Card, Container, ListGroup } from "react-bootstrap";
import "./Pricing.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const pricingText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const Pricing = ({ pricingData }) => {
  return (
    <Container className="my-6">
      <TitleComponent title="Pricing" text={pricingText} />
      <div className="d-flex flex-wrap justify-content-center justify-content-sm-between gap-4">
        {pricingData.map((ele) => {
          return (
            <Card
              key={ele.id}
              className="pricing-card-style text-center pricing-card-border-style position-relative overflow-hidden my-4"
            >
              <Card.Header
                className={
                  ele["is-business"]
                    ? "bg-color-main-theme text-light py-3 fs-5 pricing-card-header-style fw-medium"
                    : "text-color-gray py-3 fs-5 pricing-card-header-style fw-medium"
                }
              >
                {ele.class}
              </Card.Header>
              {ele["is-advanced"] && (
                <p className="bg-color-main-theme text-light position-absolute m-0 advanced-label-style">
                  Advanced
                </p>
              )}
              <ListGroup variant="flush" className="mb-4">
                <ListGroup.Item>
                  <p className="text-color-gray position-relative my-3">
                    <span className="position-relative price-card-position-style fs-5">
                      $
                    </span>
                    <span className="fs-2 fw-bold">{ele.price}</span>
                    <span className="text-color-light-gray ms-2">/ month</span>
                  </p>
                  <p
                    className={
                      ele["is-available-property1"]
                        ? "text-color-gray"
                        : "text-color-light-gray text-decoration-line-through"
                    }
                  >
                    {ele.property1}
                  </p>
                  <p
                    className={
                      ele["is-available-property2"]
                        ? "text-color-gray"
                        : "text-color-light-gray text-decoration-line-through"
                    }
                  >
                    {ele.property2}
                  </p>
                  <p
                    className={
                      ele["is-available-property3"]
                        ? "text-color-gray"
                        : "text-color-light-gray text-decoration-line-through"
                    }
                  >
                    {ele.property3}
                  </p>
                  <p
                    className={
                      ele["is-available-property4"]
                        ? "text-color-gray"
                        : "text-color-light-gray text-decoration-line-through"
                    }
                  >
                    {ele.property4}
                  </p>
                  <p
                    className={
                      ele["is-available-property5"]
                        ? "text-color-gray"
                        : "text-color-light-gray text-decoration-line-through"
                    }
                  >
                    {ele.property5}
                  </p>
                </ListGroup.Item>
              </ListGroup>
              <Card.Header className="py-3 pricing-card-header-style">
                <ButtonComponent btnText={ele.btnText} />
              </Card.Header>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Pricing;
