import React from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';

import {
  Container,
  CartContainer,
  List,
  Item,
  Details,
  ProductImage,
  Info,
  Description,
  Price,
  RemoveIcon,
  Footer,
  AmountContainer,
  Button,
  ButtonText,
  Amount,
  SubTotalPrice,
  TotalCartContainer,
  TotalLabel,
  TotalPrice,
  FinishButton,
  FinishButtonText,
} from './styles';

export default function Cart() {
  const value = '10';

  return (
    <Container>
      <ScrollView>
        <CartContainer>
          <List>
            <Item>
              <Details>
                <ProductImage
                  source={{
                    uri:
                      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
                  }}
                  resizeMode="contain"
                />
                <Info>
                  <Description>Tênis de Caminhada Leve Confortável</Description>
                  <Price>R$179,90</Price>
                </Info>
                <TouchableOpacity>
                  <RemoveIcon name="delete-forever" size={30} color="#7159c1" />
                </TouchableOpacity>
              </Details>
              <Footer>
                <AmountContainer>
                  <Button>
                    <ButtonText>-</ButtonText>
                  </Button>
                  <Amount value={value} />
                  <Button>
                    <ButtonText>+</ButtonText>
                  </Button>
                </AmountContainer>
                <SubTotalPrice>R$539,70</SubTotalPrice>
              </Footer>
            </Item>
            <Item>
              <Details>
                <ProductImage
                  source={{
                    uri:
                      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
                  }}
                  resizeMode="contain"
                />
                <Info>
                  <Description>Tênis de Caminhada Leve Confortável</Description>
                  <Price>R$179,90</Price>
                </Info>
                <TouchableOpacity>
                  <RemoveIcon name="delete-forever" size={30} color="#7159c1" />
                </TouchableOpacity>
              </Details>
              <Footer>
                <AmountContainer>
                  <Button>
                    <ButtonText>-</ButtonText>
                  </Button>
                  <Amount value={value} />
                  <Button>
                    <ButtonText>+</ButtonText>
                  </Button>
                </AmountContainer>
                <SubTotalPrice>R$539,70</SubTotalPrice>
              </Footer>
            </Item>
            <Item>
              <Details>
                <ProductImage
                  source={{
                    uri:
                      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
                  }}
                  resizeMode="contain"
                />
                <Info>
                  <Description>Tênis de Caminhada Leve Confortável</Description>
                  <Price>R$179,90</Price>
                </Info>
                <TouchableOpacity>
                  <RemoveIcon name="delete-forever" size={30} color="#7159c1" />
                </TouchableOpacity>
              </Details>
              <Footer>
                <AmountContainer>
                  <Button>
                    <ButtonText>-</ButtonText>
                  </Button>
                  <Amount value={value} />
                  <Button>
                    <ButtonText>+</ButtonText>
                  </Button>
                </AmountContainer>
                <SubTotalPrice>R$539,70</SubTotalPrice>
              </Footer>
            </Item>
            <Item>
              <Details>
                <ProductImage
                  source={{
                    uri:
                      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
                  }}
                  resizeMode="contain"
                />
                <Info>
                  <Description>Tênis de Caminhada Leve Confortável</Description>
                  <Price>R$179,90</Price>
                </Info>
                <TouchableOpacity>
                  <RemoveIcon name="delete-forever" size={30} color="#7159c1" />
                </TouchableOpacity>
              </Details>
              <Footer>
                <AmountContainer>
                  <Button>
                    <ButtonText>-</ButtonText>
                  </Button>
                  <Amount value={value} />
                  <Button>
                    <ButtonText>+</ButtonText>
                  </Button>
                </AmountContainer>
                <SubTotalPrice>R$539,70</SubTotalPrice>
              </Footer>
            </Item>
          </List>
          <TotalCartContainer>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalPrice>R$1619,10</TotalPrice>
          </TotalCartContainer>
          <FinishButton>
            <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
          </FinishButton>
        </CartContainer>
      </ScrollView>
    </Container>
  );
}
