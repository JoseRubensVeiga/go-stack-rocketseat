import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 80px 0;
`;

export const TableHeader = styled.div`
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
`;

export const DeliveriesTable = styled.table`
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
`;
