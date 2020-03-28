import React from 'react';
import {TouchableOpacity, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {formatPrice} from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartContainer,
  Item,
  Details,
  ProductImage,
  Info,
  Description,
  Price,
  RemoveIcon,
  Footer,
  AmountContainer,
  Button,
  ButtonText,
  Amount,
  SubTotalPrice,
  TotalCartContainer,
  TotalLabel,
  TotalPrice,
  FinishButton,
  FinishButtonText,
} from './styles';

function Cart({cart, totalPrice, updateAmountRequest, removeProduct}) {
  return (
    <Container>
      <CartContainer>
        {cart.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cart}
            renderItem={({item: product}) => (
              <Item>
                <Details>
                  <ProductImage
                    source={{
                      uri: product.image,
                    }}
                    resizeMode="contain"
                  />
                  <Info>
                    <Description>{product.title}</Description>
                    <Price>{product.formatedPrice}</Price>
                  </Info>
                  <TouchableOpacity onPress={() => removeProduct(product.id)}>
                    <RemoveIcon
                      name="delete-forever"
                      size={30}
                      color="#7159c1"
                    />
                  </TouchableOpacity>
                </Details>
                <Footer>
                  <AmountContainer>
                    <Button
                      onPress={() =>
                        updateAmountRequest(product.id, product.amount - 1)
                      }>
                      <ButtonText>-</ButtonText>
                    </Button>
                    <Amount value={String(product.amount)} />
                    <Button
                      onPress={() =>
                        updateAmountRequest(product.id, product.amount + 1)
                      }>
                      <ButtonText>+</ButtonText>
                    </Button>
                  </AmountContainer>
                  <SubTotalPrice>{product.subtotal}</SubTotalPrice>
                </Footer>
              </Item>
            )}
            keyExtractor={(item) => String(item.id)}
            ListFooterComponent={() => (
              <>
                <TotalCartContainer>
                  <TotalLabel>TOTAL</TotalLabel>
                  <TotalPrice>{totalPrice}</TotalPrice>
                </TotalCartContainer>
                <FinishButton>
                  <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
                </FinishButton>
              </>
            )}
          />
        ) : (
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#222',
            }}>
            Nenhum produto selecionado.
          </Text>
        )}
      </CartContainer>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.any).isRequired,
  totalPrice: PropTypes.string.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  totalPrice: formatPrice(
    state.cart.reduce((accum, product) => {
      return accum + product.amount * product.price;
    }, 0),
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
