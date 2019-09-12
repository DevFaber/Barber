import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';


const schema = Yup.object().shape({
  name: Yup.string().required('Preencha seu nome!'),
  email: Yup.string()
  .email('Insira um email valdo')
  .required('O email é obrigatório'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres!').required('A senha é obrigatória'),
});


// import { Container } from './styles';

export default function SignUp({ name, email, password }) {
  const dispatch = useDispatch();

  function handleSubmit(
    
  ) {
    dispatch(signUpRequest(name, email, password));

  }
  return (
    <>
      <img src={logo} alt="GoBarber"/>

      <Form schema={schema}onSubmit={handleSubmit}>
        <Input name="name"placeholder="Nome completo" />
        <Input name="email"type="email" placeholder="Seu email" />
        <Input name="password"type="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Sou Cadastrado!</Link>

      </Form>

    </>
  );
}
