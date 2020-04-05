import { all, takeLatest } from 'redux-saga/effects';

// import { signInSuccess } from './actions';

function* signIn(action) {
  // console.tron.log({ actionNoSaga: action });
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
