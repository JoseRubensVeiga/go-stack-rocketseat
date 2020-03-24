import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
  padding-top: 20px;
`;

export const ListProductContainer = styled.View`
  margin-right: 20px;
  flex-direction: row;
`;

export const ProductContainer = styled.View`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 220px;
  height: 340px;
  margin-left: 20px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 200px;
`;
export const ProductDescription = styled.Text`
  padding-left: 10px;
  padding-right: 10px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const AddButton = styled(TouchableOpacity)`
  display: flex;
  height: 42px;
  flex-direction: row;
  background-color: #7159c1;
  border-radius: 4px;
  align-items: stretch;
  margin-top: auto;
`;

export const ProductAmount = styled.Text`
  background-color: #5a479a;
  width: 40px;
  padding: 11px 5px;
  text-align: right;
  color: #fff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  text-align: center;
  margin: auto auto;
  font-weight: bold;
`;
