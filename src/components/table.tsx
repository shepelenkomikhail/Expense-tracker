import { Container } from "react-bootstrap";
import TableB from "react-bootstrap/Table";
import { useContext } from "react";
import { MyContext } from "../context/myProvider";

export default function Table() {
  const content = useContext(MyContext);

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
          {content?.data.map((e, ind) => (
            <tr key={ind}>
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
