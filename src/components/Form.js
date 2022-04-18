import { Form, FormGroup, Col, Row, InputGroup } from "react-bootstrap";
import ColouredButton from "./ColouredButton";

const FormD = () => {
  return (
    <section className="FormSec" id="Form">
      <div className="FormCon">
        <p>Reservation</p>
        <h1>Book Now</h1>
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" placeholder="Phone" />
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Group as={Col} controlId="formGridEmail" id="Date">
              <Form.Control type="date" placeholder="Date" />
              {/* <span>Date</span> */}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="time" placeholder="Time" />
            </Form.Group>
          </Form.Group>

          <Form.Control type="text" placeholder="Name" />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your message..."
            />
          </Form.Group>

          <ColouredButton text="Send Message" />
        </Form>
      </div>
    </section>
  );
};

export default FormD;
