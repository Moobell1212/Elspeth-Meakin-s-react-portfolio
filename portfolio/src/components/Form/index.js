import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css";

function Contactform() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" />
      </Form.Group>

      <Form.Group>
      <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" placeholder="Your message" />
      </Form.Group>

      <Button variant="primary" type="submit" id="button">
        Submit
      </Button>
    </Form>
  );
}

export default Contactform;