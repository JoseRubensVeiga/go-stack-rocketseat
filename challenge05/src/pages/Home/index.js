import React from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';

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

function Home() {
  return (
    <Container>
      <ScrollView horizontal>
        <ListProductContainer>
          <ProductContainer>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
              }}
              resizeMode="contain"
            />
            <ProductDescription>
              Tênis de Caminhada Leve Confortável
            </ProductDescription>
            <ProductPrice>R$179,90</ProductPrice>
            <AddButton>
              <ProductAmount>1</ProductAmount>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </ProductContainer>
          <ProductContainer>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
              }}
              resizeMode="contain"
            />
            <ProductDescription>
              Tênis de Caminhada Leve Confortável
            </ProductDescription>
            <ProductPrice>R$179,90</ProductPrice>
            <AddButton>
              <ProductAmount>1</ProductAmount>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </ProductContainer>
          <ProductContainer>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
              }}
              resizeMode="contain"
            />
            <ProductDescription>
              Tênis de Caminhada Leve Confortável
            </ProductDescription>
            <ProductPrice>R$179,90</ProductPrice>
            <AddButton>
              <ProductAmount>1</ProductAmount>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </ProductContainer>
        </ListProductContainer>
      </ScrollView>
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
