import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #141419;
  padding: 15px 30px 20px 20px;
`;

export const Logo = styled.Image`
  width: 180px;
`;

export const CartBadge = styled.View`
  background-color: #7159c1;
  position: absolute;
  margin-left: 19px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CartBadgeText = styled.Text`
  color: #fff;
`;
