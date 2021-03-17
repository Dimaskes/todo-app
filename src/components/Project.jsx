import React from 'react';
import { Pencil, XCircle } from 'react-bootstrap-icons';

import RenameProject from './RenameProject';

const Project = ({ project, edit }) => {
  return (
    <div className='Project'>
      <div className='name'>{project.name}</div>
      <div className='btns'>
        {edit ? (
          <div className='edit-delete'>
            <span className='edit'>
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
    </div>
  );
};

export default Project;
