import React, { useState } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import Modal from 'react-modal';

import { Container } from './styles';
import TableOptionsPopup from '~/components/TableOptionsPopup';

export default function Deliveries() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
            <tr key={item}>
              <td>#01</td>
              <td>Ludwig van Beethoven</td>
              <td>John Doe</td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>Entregue</td>
              <td>
                <TableOptionsPopup
                  onShow={openModal}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            position: 'absolute',
            height: '300px',
            width: '500px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            transform: 'translate(calc(50vw - 250px), calc(50vh - 150px))',
          },
        }}
        contentLabel="Example Modal"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        fuga facere veniam doloremque eaque totam enim exercitationem amet
        impedit beatae magnam deleniti tempora quam laboriosam delectus tempore
        voluptate, perferendis ut.
      </Modal>
    </Container>
  );
}
