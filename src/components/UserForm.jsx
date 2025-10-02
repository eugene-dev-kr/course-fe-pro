import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function UserForm({ onAdd }) {
  // локальні стейти для кожного поля
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState(null);

  // обробник сабміту
  function handleSubmit(e) {
    e.preventDefault();

    // валідація
    if (!firstName || !lastName || !age || !photo) return;
    if (Number(age) <= 0) return;

    // створюємо нового юзера
    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      age: Number(age),
      photo: URL.createObjectURL(photo), // робимо превʼю з файла
    };

    // відправляємо в App
    onAdd(newUser);

    // очищаємо форму
    setFirstName("");
    setLastName("");
    setAge("");
    setPhoto(null);
    e.target.reset(); // очищає file input
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Створити користувача</h3>

      <Form.Group className="mb-3">
        <Form.Label>Імʼя</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Прізвище</Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Вік</Form.Label>
        <Form.Control
          type="number"
          value={age}
          min="0"
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Фото</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit"  disabled={!firstName || !lastName || !age || !photo || Number(age) <= 0}>
        Додати
      </Button>
    </Form>
  );
}
