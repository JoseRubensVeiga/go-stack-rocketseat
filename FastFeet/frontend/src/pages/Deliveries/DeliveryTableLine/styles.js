import styled from 'styled-components';

export const PopupOptions = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;

  width: 150px;

  margin-left: -60px;
  box-shadow: 0 0 5px lightgray;

  &:before {
    content: '';
    margin-left: calc(65px - 10px);
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
    margin-left: calc(65px - 20px);
    top: 0;

    height: 10px;
    width: 30px;
    background-color: white;

    position: absolute;
  }

  ul {
    padding-top: 5px;

    li {
      padding: 10px 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: 0.3s;
      background-color: #fff;
      color: #999;

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
