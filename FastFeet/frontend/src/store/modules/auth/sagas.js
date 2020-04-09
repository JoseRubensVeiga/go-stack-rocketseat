import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess } from './actions';

function* signIn(action) {
  try {
    const { email, password } = action.payload;

    const response = yield call(api.post, '/auth', {
      email,
      password,
    });

    const { access_token: token, user } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    yield put(signInSuccess(user));
  } catch (err) {
    toast.error('Ops! suas creadenciais estão incorretas');
  }
}

function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
