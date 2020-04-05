import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 360px;

  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  padding: 20px;

  animation: fadeIn 0.4s ease-in-out;

  img {
    margin: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
