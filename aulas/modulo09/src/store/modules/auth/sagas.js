import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, `sessions`, { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é prestador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (e) {
    toast.error('Falha na autenticação. Verifique seus dados.');
    yield put(signFailure());
  }
}

function storeUser({ name, email, password }) {
  return api
    .post('/users', { name, email, password })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  const { response, error } = yield call(storeUser, {
    name,
    email,
    password,
  });

  if (response) {
    yield put(signUpSuccess());
  } else {
    toast.error(error.response.data.error);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
