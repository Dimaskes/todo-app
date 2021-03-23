import React from 'react';

import { Palette, PencilFill, CaretUp } from 'react-bootstrap-icons';
import { TodoContext } from '../context';
import AddNewProject from './AddNewProject';
import Project from './Project';

const Projects = () => {
  const [showMenu, setShowMenu] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const pencilColor = edit ? '#5ab95a' : '#fcfcfc';

  const { projects } = React.useContext(TodoContext);

  return (
    <div className='Projects'>
      <div className='header'>
        <div className='title'>
          <Palette size='20' />
          <p>Projects</p>
        </div>
        <div className='btns'>
          {showMenu && projects.length > 0 && (
            <span className='edit' onClick={() => setEdit(!edit)}>
              <PencilFill size='18' color={pencilColor} />
            </span>
          )}
          <AddNewProject />
          <span className='arrow'>
            <CaretUp size='20' />
          </span>
        </div>
      </div>
      <div className='items'>
        {projects.map((project) => (
          <Project project={project} key={project.id} edit={edit} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
