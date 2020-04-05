import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container, TableHeader, DeliveriesTable } from './styles';
import DeliveryTableLine from './DeliveryTableLine';

export default function Deliveries() {
  return (
    <Container>
      <h1 className="styled-title">Gerenciando encomendas</h1>
      <TableHeader>
        <div className="input-with-icon">
          <MdSearch size={20} color="#757575" />
          <input type="text" placeholder="Buscar por encomendas" />
        </div>
        <button type="button">
          <MdAdd size={24} color="#fff" />
          CADASTRAR
        </button>
      </TableHeader>
      <DeliveriesTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((item) => (
            <DeliveryTableLine key={item} />
          ))}
        </tbody>
      </DeliveriesTable>
    </Container>
  );
}
