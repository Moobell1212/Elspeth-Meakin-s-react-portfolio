import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css";

export default function Contactform() {

  const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };

    if (submitted) {
      return (
        <>
          <h2>Thank you!</h2>
          <div>We'll be in touch soon.</div>
        </>
      );
    }
  };

  return (
    <Form action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" id="name" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" placeholder="Your message" id="message" required />
      </Form.Group>
      <Button variant="info" type="submit" id="button">
        Submit
      </Button>
    </Form>
  );
}