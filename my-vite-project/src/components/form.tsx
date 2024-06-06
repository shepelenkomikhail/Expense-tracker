import { Container, Row, Col, Button } from "react-bootstrap";
import FormB from "react-bootstrap/Form";

export default function Form() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData);

    console.log(formJson);
  }

  return (
    <Container>
      <FormB onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormB.Group>
              <FormB.Label>Amount</FormB.Label>
              <FormB.Control
                required
                type="number"
                placeholder="$$$"
                name="amount"
              ></FormB.Control>
              <FormB.Control.Feedback>Looks good!</FormB.Control.Feedback>
            </FormB.Group>
          </Col>

          <Col md={6}>
            <FormB.Group>
              <FormB.Label>Name</FormB.Label>
              <FormB.Control
                required
                type="text"
                placeholder="..."
                name="name"
              ></FormB.Control>
              <FormB.Control.Feedback>Looks good!</FormB.Control.Feedback>
            </FormB.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormB.Group>
              <FormB.Label>Date</FormB.Label>
              <FormB.Control type="date" name="date"></FormB.Control>
              <FormB.Control.Feedback>Looks good!</FormB.Control.Feedback>
            </FormB.Group>
          </Col>

          <Col md={6}>
            <FormB.Group>
              <FormB.Label>Payment Type</FormB.Label>
              <FormB.Control as="select" name="type">
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>PayPal</option>
                <option>Other</option>
              </FormB.Control>
              <FormB.Control.Feedback>Looks good!</FormB.Control.Feedback>
            </FormB.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-center">
          <Button className="m-3" type="submit">
            Add Expense
          </Button>
        </div>
      </FormB>
    </Container>
  );
}
