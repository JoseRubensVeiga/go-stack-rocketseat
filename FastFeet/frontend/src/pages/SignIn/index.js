import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/images/fastfeet-logo.png';
import { Container } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleOnSubmit(data) {
    const { email, password } = data;
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="logo" />

      <Form
        onSubmit={handleOnSubmit}
        initialData={{ email: 'admin@fastfeet.com', password: '123456' }}
        className="styled-form"
      >
        <div className="styled-form-group">
          <label htmlFor="email">SEU E-MAIL</label>
          <Input
            type="email"
            name="email"
            id="email"
            className="styled-form-control"
            placeholder="exemplo@email.com"
          />
        </div>
        <div className="styled-form-group">
          <label htmlFor="password">SUA SENHA</label>
          <Input
            type="password"
            name="password"
            id="password"
            className="styled-form-control"
            placeholder="Sua senha secreta"
          />
        </div>
        <button type="submit" className="styled-button">
          Entrar no sistema
        </button>
      </Form>
    </Container>
  );
}
