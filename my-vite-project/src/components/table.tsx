import { Container } from "react-bootstrap";
import TableB from "react-bootstrap/Table";
import exp from "../data/content.json";

export default function Table() {
  return (
    <Container>
      <TableB striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Payment Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {exp.map((e, ind) => (
            <tr>
              <td>{ind + 1}</td>
              <td>{e.name}</td>
              <td>{e.amount}</td>
              <td>{e.payment_type}</td>
              <td>{e.payment_type}</td>
            </tr>
          ))}
        </tbody>
      </TableB>
    </Container>
  );
}
