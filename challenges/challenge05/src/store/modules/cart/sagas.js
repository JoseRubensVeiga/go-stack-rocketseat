import {Alert} from 'react-native';
import {takeLatest, all, call, put, select} from 'redux-saga/effects';

import api from '../../../services/api';
import {addToCartSuccess, updateAmountSuccess} from './actions';

function* updateAmount({id, amount}) {
  const stockResponse = yield call(api.get, `/stock/${id}`);
  const stockAmount = stockResponse.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Ops!', 'Não temos essa quantidade de produtos no estoque. =(');
  } else {
    yield put(updateAmountSuccess(id, amount));
  }
}

function* addToCart({id}) {
  const response = yield call(api.get, `/products/${id}`);

  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id),
  );

  if (!productExists) {
    yield put(addToCartSuccess(response.data));
    return;
  }

  const newAmount = productExists.amount + 1;
  yield put(updateAmount(id, newAmount));
}

export default all([
  takeLatest('@Cart/ADD_REQUEST', addToCart),
  takeLatest('@Cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
