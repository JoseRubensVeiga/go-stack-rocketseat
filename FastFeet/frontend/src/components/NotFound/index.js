import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <p>Página não encontrada</p>
      <small>O link que você tentou abrir não está disponível.</small>
      <Link to="/">
        <MdChevronLeft size={30} color="#aaa" />
        Voltar ao início
      </Link>
    </Container>
  );
}
