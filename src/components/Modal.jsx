import React from 'react';

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = React.useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    } else {
      console.log(e.target);
    }
  };

  return (
    showModal && (
      <div className='Modal' ref={modalRef} onClick={closeModal}>
        <div className='container'>{children}</div>
      </div>
    )
  );
};

export default Modal;
