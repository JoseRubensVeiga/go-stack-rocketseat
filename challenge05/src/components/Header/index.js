import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Container, Logo, CartBadge, CartBadgeText} from './styles';
import logo from '../../assets/images/logo.png';
import * as RootNavigation from '../../services/RootNavigation';

function Header({cartSize}) {
  return (
    <Container>
      <TouchableOpacity onPress={() => RootNavigation.navigate('Home')}>
        <Logo source={logo} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => RootNavigation.navigate('Cart')}>
        <View>
          <Icon name="shopping-basket" size={30} color="#FFF" />
          <CartBadge>
            <CartBadgeText>{cartSize}</CartBadgeText>
          </CartBadge>
        </View>
      </TouchableOpacity>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
