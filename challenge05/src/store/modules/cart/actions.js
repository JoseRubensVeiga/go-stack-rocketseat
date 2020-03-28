export function addToCartRequest(id) {
  return {
    type: '@Cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@Cart/ADD_SUCCESS',
    product,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@Cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@Cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}

export function removeProduct(id, amount) {
  return {
    type: '@Cart/REMOVE',
    id,
    amount,
  };
}
