import React from 'react';
import { useDispatch } from 'react-redux';

import logo from '~/assets/images/fastfeet-logo.png';
import { Container, ItemList, Item, ProfileContainer, Logout } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Navbar() {
  const dispatch = useDispatch();
  const items = [
    { label: 'Encomendas', url: '/deliveries' },
    { label: 'Entregadores', url: '/deliverymans' },
    { label: 'Destinatários', url: '/recipients' },
    { label: 'Problemas', url: '/problems' },
  ];

  function logoutUser() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="FastFeet" />
        <ItemList>
          {items.map((item) => (
            <Item to={item.url} activeClassName="active" key={item.label} exact>
              {item.label}
            </Item>
          ))}
        </ItemList>
      </div>
      <ProfileContainer>
        <p>Admin FastFeet</p>
        <Logout onClick={logoutUser}>sair do sistema</Logout>
      </ProfileContainer>
    </Container>
  );
}
