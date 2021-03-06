import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container } from './styles';
import TableOptionsPopup from '~/components/TableOptionsPopup';

export default function Deliverymans() {
  return (
    <Container>
      <h1 className="styled-title">Gerenciando encomendas</h1>
      <div className="styled-table-header">
        <div className="input-with-icon">
          <MdSearch size={20} color="#757575" />
          <input type="text" placeholder="Buscar por encomendas" />
        </div>
        <button type="button">
          <MdAdd size={24} color="#fff" />
          CADASTRAR
        </button>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((item) => (
            <tr key={item}>
              <td>#01</td>
              <td>JD</td>
              <td>John Doe</td>
              <td>example@email.com</td>
              <td>
                <TableOptionsPopup onEdit={() => {}} onDelete={() => {}} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
