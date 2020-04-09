import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;

  width: 200px;

  margin-left: calc(-100px + 15px);
  box-shadow: 0 0 5px lightgray;

  &:before {
    content: '';
    margin-left: calc(80px);
    margin-top: calc(-10px + -10px / 2);

    height: 10px;
    width: 10px;
    background-color: white;
    transform: rotate(45deg);

    box-shadow: 0 0 5px lightgray;

    position: absolute;
  }

  &:after {
    content: '';
    margin-left: calc(70px);
    top: 0;

    height: 10px;
    width: 30px;
    background-color: #fff;

    position: absolute;
  }

  ul {
    li {
      padding: 10px 5px;
      transition: 0.3s;
      background-color: #fff;

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: none;
        background: none;
        color: #999;
        font-size: 16px;

        div {
          flex: 1;
        }
      }

      &:not(:last-child) {
        border-bottom: 1px solid #eeeeee;
      }

      &:hover {
        background-color: #fafafa;
        cursor: pointer;
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
