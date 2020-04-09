import React from 'react';

import { Container } from './styles';
import TableOptionsPopup from '~/components/TableOptionsPopup';

export default function Problems() {
  return (
    <Container>
      <h1 className="styled-title">Gerenciando encomendas</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((item) => (
            <tr key={item}>
              <td>#01</td>
              <td>Ludwig van Beethoven</td>
              <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
              <td>
                <TableOptionsPopup
                  onDelete={() => {}}
                  deleteLabel="Cancelar encomenda"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
