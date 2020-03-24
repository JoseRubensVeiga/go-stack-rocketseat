import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {Container, Logo, CartBadge, CartBadgeText} from './styles';
import logo from '../../assets/images/logo.png';
import * as RootNavigation from '../../services/RootNavigation';

function Header() {
  return (
    <Container>
      <TouchableOpacity onPress={() => RootNavigation.navigate('Home')}>
        <Logo source={logo} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => RootNavigation.navigate('Cart')}>
        <View>
          <Icon name="shopping-basket" size={30} color="#FFF" />
          <CartBadge>
            <CartBadgeText>3</CartBadgeText>
          </CartBadge>
        </View>
      </TouchableOpacity>
    </Container>
  );
}

Header.porpTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
