import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import UserForm from './components/UserForm';
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }
  
  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <UserForm onAdd={addUser} />
        </Col>
        <Col md={8}>
          <UserList users={users} />
        </Col>
      </Row>
    </Container>
  );
}


export default App
