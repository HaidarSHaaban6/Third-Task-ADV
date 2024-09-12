import { Accordion, Container } from "react-bootstrap";
import "./AskedQuestionsSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";

const AskedQuestionsText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam adipisicing elit";

const AskedQuestionsSection = ({ questionsData }) => {
  return (
    <div className="py-4 bg-color-light-main-theme">
      <Container>
        <TitleComponent
          title="Frequently Asked Questions"
          text={AskedQuestionsText}
        />
        <Accordion
          className="d-flex flex-column align-items-center"
          defaultActiveKey="0"
          flush
        >
          {questionsData.map((ele) => {
            return (
              <Accordion.Item
                className="asked-questions-accordion-style my-2 asked-questions-width-style"
                key={ele?.id}
                eventKey={ele?.id}
              >
                <Accordion.Header className="text-color-gray">
                  {ele?.question}
                </Accordion.Header>
                <Accordion.Body className="text-color-gray">
                  {ele?.answer}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </div>
  );
};

export default AskedQuestionsSection;
