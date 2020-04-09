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

  .styled-table-header {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .input-with-icon {
      height: 35px;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
      background-color: #fff;

      display: flex;
      align-items: center;

      input {
        border: none;
        padding-left: 10px;
        font-size: 14px;
        color: #222;
      }
    }

    button {
      height: 35px;
      background-color: #7d40e7;
      border: none;
      color: #fff;
      padding: 0 20px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      margin: 5px 0;
      transition: 0.2s;
      display: flex;
      align-items: center;
    }
  }

  .styled-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1rem;
    margin-top: 20px;
    color: #666;

    th,
    td {
      text-align: left;
    }

    th {
      padding-left: 15px;
      color: #444;
    }

    td {
      background-color: #fff;
      padding: 15px;

      &:first-child {
        border-radius: 8px 0 0 8px;
      }

      &:last-child {
        border-radius: 0 8px 8px 0;
      }

      .more-button {
        cursor: pointer;
      }
    }
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
`;
