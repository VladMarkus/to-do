import React from 'react';
import './Footer.scss';

import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="text-center">
          &copy; 2020 - To Do list. Vlad Markus.
        </div>
      </Container>
    </div>
  );
}
