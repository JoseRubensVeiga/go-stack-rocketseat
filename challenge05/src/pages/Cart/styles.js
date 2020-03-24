import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
  padding: 20px;
`;

export const CartContainer = styled.View`
  background-color: #fff;
  width: 100%;
  border-radius: 4px;
  padding: 20px;
`;

export const List = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Item = styled.View`
  margin-bottom: 20px;
`;

export const Details = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Info = styled.View`
  width: 150px;
  padding-top: 10px;
  padding-left: 5px;
`;

export const Description = styled.Text`
  padding-top: 5px;
  margin-bottom: 10px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const RemoveIcon = styled(Icon)`
  margin: auto 0;
`;

export const Footer = styled.View`
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const AmountContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Button = styled(TouchableOpacity)`
  border: 2px solid #7159c1;
  width: 20px;
  height: 20px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #7159c1;
  font-weight: bold;
`;

export const Amount = styled.TextInput`
  background-color: white;
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 0 15px;
`;

export const SubTotalPrice = styled.Text`
  padding: 0 15px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const TotalCartContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const TotalLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #777;
`;

export const TotalPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;

export const FinishButton = styled(TouchableOpacity)`
  background-color: #715c91;
  height: 42px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const FinishButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
`;
