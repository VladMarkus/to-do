import React from 'react';
import PropTypes from 'prop-types';
import './ToDoItem.scss';

const ToDoItem = ({ todo, index }) => {

  return (
  <li>
    <label for={index}>
      <input type="checkbox" id={index} />
      <strong>{index + 1})&nbsp;</strong>
      {todo.title}
    </label>
  </li>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default ToDoItem;