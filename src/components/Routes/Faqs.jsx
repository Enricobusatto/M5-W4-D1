import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function Faqs() {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is this app about?</Accordion.Header>
          <Accordion.Body>
            This app allows users to browse and filter books by category and title. It’s built with React and styled using Bootstrap.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I add my own books?</Accordion.Header>
          <Accordion.Body>
            Currently, you can only view and filter the books provided, but future versions might allow user-generated content.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>How can I switch between Light and Dark themes?</Accordion.Header>
          <Accordion.Body>
            Use the toggle switch in the navigation bar to change the theme. The entire app will update accordingly.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Who built this project?</Accordion.Header>
          <Accordion.Body>
            This project was built as part of a React learning module, focusing on reusable components, hooks, and API interaction.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Faqs;
