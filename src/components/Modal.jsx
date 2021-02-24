import React from 'react';

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = React.useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    showModal && (
      <div className='Modal' onClick={closeModal} ref={modalRef}>
        <div className='container'>{children}</div>
      </div>
    )
  );
};

export default Modal;
