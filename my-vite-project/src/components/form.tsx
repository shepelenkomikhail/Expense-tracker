import { Container, Row, Col, Button } from "react-bootstrap";
import FormB from "react-bootstrap/Form";
import { MyContext } from "../context/myProvider";
import { useContext, useState } from "react";

export default function Form() {
  const content = useContext(MyContext);

  const [validated, setValidated] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData);

      const newExpense = {
        id: content ? content.data.length + 1 : 1,
        name: formJson.name as string,
        amount: Number(formJson.amount),
        payment_type: formJson.type as string,
        date: formJson.date as string,
      };

      content?.setData([...content.data, newExpense]);

      console.log(formJson);
    }

    setValidated(true);
  }

  return (
    <Container>
      <FormB noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormB.Group controlId="validationAmount">
              <FormB.Label>Amount</FormB.Label>
              <FormB.Control
                required
                type="number"
                placeholder="$$$"
                name="amount"
              />
              <FormB.Control.Feedback type="invalid">
                Please provide a valid amount.
              </FormB.Control.Feedback>
              <FormB.Control.Feedback>Looks good!</FormB.Control.Feedback>
            </FormB.Group>
          </Col>

          <Col md={6}>
            <FormB.Group controlId="validationName">
              <FormB.Label>Name</FormB.Label>
              <FormB.Control
                required
                type="text"
                placeholder="..."
                name="name"
              />
              <FormB.Control.Feedback type="invalid">
                Please provide a name.
              </FormB.Control.Feedback>
              <FormB.Control.Feedback>Looks good!</FormB.Control.Feedback>
            </FormB.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormB.Group controlId="validationDate">
              <FormB.Label>Date</FormB.Label>
              <FormB.Control type="date" name="date" required />
              <FormB.Control.Feedback type="invalid">
                Please provide a valid date.
              </FormB.Control.Feedback>
              <FormB.Control.Feedback>Looks good!</FormB.Control.Feedback>
            </FormB.Group>
          </Col>

          <Col md={6}>
            <FormB.Group controlId="validationPaymentType">
              <FormB.Label>Payment Type</FormB.Label>
              <FormB.Control as="select" name="type" required>
                <option value="">Select a payment type</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>PayPal</option>
                <option>Other</option>
              </FormB.Control>
              <FormB.Control.Feedback type="invalid">
                Please select a payment type.
              </FormB.Control.Feedback>
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
