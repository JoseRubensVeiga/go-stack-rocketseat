import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stockResponse = yield call(api.get, `/stock/${id}`);

  const stockAmount = stockResponse.data.amount;
  const oldAmount = productExists ? productExists.amount : 0;
  const newAmount = oldAmount + 1;

  if (newAmount > stockAmount) {
    toast.error('Ops, quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, newAmount));
  } else {
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    return;
  }

  const stockResponse = yield call(api.get, `/stock/${id}`);
  const stockAmount = stockResponse.data.amount;

  if (amount > stockAmount) {
    toast.error('Ops, quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@Cart/ADD_REQUEST', addToCart),
  takeLatest('@Cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
