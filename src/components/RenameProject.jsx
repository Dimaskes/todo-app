import React from 'react';

import ProjectForm from './ProjectForm';

const RenameProject = ({ project, setShowModal }) => {
  const [newProjectName, setNewProjectName] = React.useState(project.name);
  function handleSubmit(params) {}
  return (
    <div className='RenameProject'>
      <ProjectForm
        handleSubmit={handleSubmit}
        heading='Edit project name...'
        value={newProjectName}
        setValue={setNewProjectName}
        confirmButtonText='New name'
      />
    </div>
  );
};

export default RenameProject;
