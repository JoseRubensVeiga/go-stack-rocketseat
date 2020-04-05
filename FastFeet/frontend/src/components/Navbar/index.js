import React from 'react';

import logo from '~/assets/images/fastfeet-logo.png';
import { Container, ItemList, Item, ProfileContainer, Logout } from './styles';

export default function Navbar() {
  const items = [
    { label: 'Encomendas', isActive: true, url: '/deliveries' },
    { label: 'Entregadores', isActive: false, url: '/deliverymans' },
    { label: 'Destinatários', isActive: false, url: '/recipients' },
    { label: 'Problemas', isActive: false, url: '/problems' },
  ];

  function logoutUser() {
    alert('logout');
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
