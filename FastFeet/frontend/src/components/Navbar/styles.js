import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  height: 64px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 200px;
      padding-right: 20px;
      border-right: 1px solid #ddd;
      margin-right: 20px;
    }
  }
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

export const Item = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px;
  cursor: 'pointer';
  color: #999;

  &.active {
    cursor: 'default';
    color: #444;
  }

  & + & {
    margin-left: 15px;
  }
`;

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Logout = styled.p`
  color: #de3838;
  cursor: pointer;
`;
