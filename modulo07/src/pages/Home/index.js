import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { addToCartRequest } from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const amount = useSelector(state =>
    state.cart.reduce((accum, product) => {
      accum[product.id] = product.amount;
      return accum;
    }, {})
  );

  useEffect(() => {
    (async () => {
      const response = await api.get('/products');

      response.data.forEach(product => {
        product.priceFormatted = formatPrice(product.price);
      });
      setProducts([...products, ...response.data]);
    })();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button
            type="button"
            onClick={() => dispatch(addToCartRequest(product.id))}
          >
            <div>
              <MdShoppingCart size={16} color="#FFF" />
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
