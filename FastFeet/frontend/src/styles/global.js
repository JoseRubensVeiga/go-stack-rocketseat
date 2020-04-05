import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, input, button, text-area {
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: #f5f5f5;
  }

  a, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .styled-form {
    width: 100%;
    margin: 10px 0;
  }

  .styled-form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0;

    label {
      font-weight: bold;
      font-size: 14px;
      color: #444;
      width: 100%;
    }
  }

  .styled-form-control {
    width: 100%;
    height: 45px;
    padding: 12px 15px;
    font-size: 16px;
    border: 1px solid #DDD;
    border-radius: 4px;
    margin: 10px 0;

    &::placeholder {
      color: #999;
    }
  }

  .styled-button {
    background-color: #7D40E7;
    border: none;
    color: #FFF;
    padding: 12px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    margin: 5px 0;
    transition: .2s;

    &:hover {
      background-color: ${darken(0.05, '#7D40E7')};
    }
  }

  .styled-title {
    font-size: 24px;
    color: #444;
  }

`;
