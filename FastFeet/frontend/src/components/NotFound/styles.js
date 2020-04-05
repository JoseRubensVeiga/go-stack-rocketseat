import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 10px solid #eee;
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaa;

  h1 {
    font-size: 70px;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  small {
    margin-top: 10px;
  }

  a {
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 5px 16px 5px 10px;
    width: 170px;
    color: #aaa;
    transition: 0.2s;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background-color: #f9f9f9;
    }
  }
`;
