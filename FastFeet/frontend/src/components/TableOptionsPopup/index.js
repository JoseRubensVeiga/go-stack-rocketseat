import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container } from './styles';

export default function TableOptionsPopup({
  onShow,
  onEdit,
  onDelete,
  deleteLabel,
}) {
  const popupRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const opt = [];

    if (onShow) {
      opt.push({
        Icon: MdRemoveRedEye,
        label: 'Visualizar',
        color: '#8E5BE8',
        action: onShow,
      });
    }

    if (onEdit) {
      opt.push({
        Icon: MdEdit,
        label: 'Editar',
        color: '#4D85EE',
        action: onEdit,
      });
    }

    if (onDelete) {
      opt.push({
        Icon: MdDeleteForever,
        label: deleteLabel || 'Excluir',
        color: '#DE3B3B',
        action: onDelete,
      });
    }

    setOptions(opt);
  }, [onShow, onEdit, onDelete]);

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
    <>
      <MdMoreHoriz
        onClick={() => setShowPopup(!showPopup)}
        className="more-button"
        size={20}
        color="#444"
      />
      <Container hidden={!showPopup} ref={popupRef}>
        <ul>
          {options.map((option) => (
            <li key={option.label}>
              <button type="button" onClick={option.action}>
                <option.Icon size={18} color={option.color} />
                <div>{option.label}</div>
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

TableOptionsPopup.propTypes = {
  onShow: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  deleteLabel: PropTypes.string,
};

TableOptionsPopup.defaultProps = {
  onShow: null,
  onEdit: null,
  onDelete: null,
  deleteLabel: null,
};
