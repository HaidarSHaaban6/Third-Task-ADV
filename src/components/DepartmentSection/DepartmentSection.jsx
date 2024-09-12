import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import "./DepartmentSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";
// import { departmentData } from "../../Data/Data";

const departmentSectionText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const DepartmentSection = ({departmentData}) => {
  return (
    <Container>
      <TitleComponent title="Departments" text={departmentSectionText} />
      <div className="my-6">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="flex-column-style">
            <Col className="width-50-style" sm={3}>
              <Nav variant="pills" className="flex-column">
                {departmentData.map((ele) => {
                  return (
                    <Nav.Item key={ele?.id}>
                      <Nav.Link
                        className="text-color-gray fw-bold nav-link-padding-style"
                        eventKey={ele?.order}
                      >
                        {ele?.name}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Col>
            <Col className="width-col-style my-xl-0 my-3" sm={9}>
              <Tab.Content>
                {departmentData.map((ele) => {
                  return (
                    <Tab.Pane key={ele?.id} eventKey={ele?.order}>
                      <div className="d-flex flex-column-reverse flex-md-row">
                        <div className="w-75 pe-0 pe-md-5 width-department-section-style">
                          <h2 className="text-color-gray my-3 -my-md-0">
                            {ele?.name}
                          </h2>
                          <p className="text-color-semi-light-gray my-4">
                            {ele?.description}
                          </p>
                          <p className="text-color-semi-light-gray">
                            {ele?.paragraph}
                          </p>
                        </div>
                        <img
                          src={ele?.img}
                          className="img-fluid w-25 width-department-section-style"
                          alt={ele?.name}
                        />
                      </div>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Container>
  );
};

export default DepartmentSection;
