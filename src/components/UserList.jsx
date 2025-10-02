import { Card, Row, Col } from "react-bootstrap";

export default function UserList({ users }) {
  return (
    <Row>
      {users.map((u) => (
        <Col md={6} key={u.id} className="mb-3">
          <Card>
            <Card.Img variant="top" src={u.photo} />
            <Card.Body>
              <Card.Title>
                {u.firstName} {u.lastName}
              </Card.Title>
              <Card.Text>Вік: {u.age}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
