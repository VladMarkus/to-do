import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToDo />, div);
  ReactDOM.unmountComponentAtNode(div);
});