import React from 'react';

import Modal from './Modal';
import { Plus } from 'react-bootstrap-icons';
import ProjectForm from './ProjectForm';

const AddNewProject = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [projectName, setProjectName] = React.useState('');
  function handleSubmit(e) {}

  return (
    <div className='AddNewProject'>
      <div className='add-button'>
        <span onClick={() => setShowModal(true)}>
          <Plus size='20' />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading='New project!'
          value={projectName}
          setValue={setProjectName}
          confirmButtonText='+ Add Project'
        />
      </Modal>
    </div>
  );
};

export default AddNewProject;
