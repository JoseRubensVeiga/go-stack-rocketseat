import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto 0;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  color: ${(props) => (props.available ? '#999' : '#7159c1')};

  opacity: ${(props) => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: inherit;
  }

  span {
    display: block;
    margin-top: 3px;
    color: inherit;
  }
`;
