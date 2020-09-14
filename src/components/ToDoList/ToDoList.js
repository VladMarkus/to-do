import React from 'react';
import PropTypes from 'prop-types';
import './ToDoList.scss';

import ToDoItem from '../ToDoItem/ToDoItem';


const ToDoList = ({ todos }) => {
  return (
  <div className="to-do-list">
    <ul className="list-unstyled">
      {todos.map((todo, index) => {
        return <ToDoItem todo={todo} key={todo.id} index={index} />
      })}
    </ul>
  </div>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ToDoList;
