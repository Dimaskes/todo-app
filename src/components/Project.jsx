import React from 'react';
import { Pencil, XCircle } from 'react-bootstrap-icons';

import RenameProject from './RenameProject';
import Modal from './Modal';

const Project = ({ project, edit }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='Project'>
      <div className='name'>{project.name}</div>
      <div className='btns'>
        {edit ? (
          <div className='edit-delete'>
            <span className='edit' onClick={() => setShowModal(true)}>
              <Pencil size='15' />
            </span>
            <span className='delete'>
              <XCircle size='15' />
            </span>
          </div>
        ) : project.numOfTodos === 0 ? (
          ''
        ) : (
          <div className='total-todos'>{project.numOfTodos}</div>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject project={project} setShowModal={setShowModal} handleSubmit='New name...' />
      </Modal>
    </div>
  );
};

export default Project;
