import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Bell, Calendar2Date, Clock, Palette, X } from 'react-bootstrap-icons';

const TodoForm = ({
  handleSubmit,
  heading = false,
  text,
  setText,
  day,
  setDay,
  time,
  setTime,
  projects,
  showButtons = false,
  setShowModal = false,
}) => {
  console.log(projects);
  // для изменения стандартных цветов Material-ui
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#8f2d2d',
      },
      secondary: {
        main: '#ffc3c3',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit} className='TodoForm'>
          <div className='text'>
            {heading && <h3>{heading}</h3>}

            <input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='To do...'
              autoFocus
            />
          </div>
          <div className='remind'>
            <Bell />
            <p>Remid me!</p>
          </div>
          <div className='pick-day'>
            <div className='title'>
              <Calendar2Date />
              <p>Choose a day</p>
            </div>
            <DatePicker value={day} onChange={(day) => setDay(day)} />
          </div>
          <div className='pick-time'>
            <div className='title'>
              <Clock />
              <p>Choose a day</p>
            </div>
            <TimePicker value={time} onChange={(time) => setTime(time)} />
          </div>
          <div className='pick-project'>
            <div className='title'>
              <Palette />
              <p>Choose a project</p>
            </div>
            <div className='projects'>
              {projects.length !== 0 &&
                projects.map((project) => (
                  <div className='project' key={project.id}>
                    {project.name}
                  </div>
                ))}
            </div>
          </div>
          {showButtons && (
            <div>
              <div className='cancel' onClick={() => setShowModal(false)}>
                <X size='40' />
              </div>
              <div className='confirm'>
                <button>+ Add to do</button>
              </div>
            </div>
          )}
        </form>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default TodoForm;
