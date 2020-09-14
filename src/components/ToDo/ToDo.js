import React from 'react';
import './ToDo.scss';

import { Container } from 'react-bootstrap';
import ToDoList from '../ToDoList/ToDoList';

export default function ToDo() {

  const todos = [
    { id: 1, completed: false, title: 'Купить хлеб'},
    { id: 2, completed: false, title: 'Купить масло'},
    { id: 3, completed: false, title: 'Купить молоко'},
  ];

  return (
  <div className="to-do">
    <Container>
      <ToDoList todos={todos} />
    </Container>
  </div>
  );
};
