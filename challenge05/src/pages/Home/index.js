import React from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Container,
  ListProductContainer,
  ProductContainer,
  ProductImage,
  ProductDescription,
  ProductPrice,
  AddButton,
  ProductAmount,
  AddButtonText,
} from './styles';

import api from '../../services/api';
import {formatPrice} from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

class Home extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({
      products: response.data.map((product) => ({
        ...product,
        formatedPrice: formatPrice(product.price),
      })),
    });
  }

  render() {
    const {products} = this.state;
    const {addToCartRequest, amounts} = this.props;

    return (
      <Container>
        <ScrollView horizontal>
          <ListProductContainer>
            {products.map((product) => (
              <ProductContainer key={product.id}>
                <ProductImage
                  source={{
                    uri: product.image,
                  }}
                  resizeMode="contain"
                />
                <ProductDescription>{product.title}</ProductDescription>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <AddButton onPress={() => addToCartRequest(product.id)}>
                  <ProductAmount>{amounts[product.id] || 0}</ProductAmount>
                  <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
              </ProductContainer>
            ))}
          </ListProductContainer>
        </ScrollView>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  addToCartRequest: PropTypes.func.isRequired,
  amounts: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = (state) => ({
  amounts: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
