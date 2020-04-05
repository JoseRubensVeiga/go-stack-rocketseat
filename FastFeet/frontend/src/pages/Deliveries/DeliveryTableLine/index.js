import React, { useRef, useEffect, useState } from 'react';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { PopupOptions } from './styles';

export default function DeliveryTableLine() {
  const popupRef = useRef();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  return (
    <tr>
      <td>#01</td>
      <td>Ludwig van Beethoven</td>
      <td>John Doe</td>
      <td>Rio do Sul</td>
      <td>Santa Catarina</td>
      <td>Entregue</td>
      <td>
        <MdMoreHoriz
          onClick={() => setShowPopup(!showPopup)}
          className="more-button"
          size={20}
          color="#444"
        />
        <PopupOptions hidden={!showPopup} ref={popupRef}>
          <ul>
            <li>
              <MdRemoveRedEye size={20} color="#8E5BE8 " />
              Visualizar
            </li>
            <li>
              <MdEdit size={20} color="#4D85EE" />
              Editar
            </li>
            <li>
              <MdDeleteForever size={20} color="#DE3B3B" />
              Excluir
            </li>
          </ul>
        </PopupOptions>
      </td>
    </tr>
  );
}
