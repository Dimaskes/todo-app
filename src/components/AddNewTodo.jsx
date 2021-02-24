import React from 'react';
import Modal from './Modal';

import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Bell, Calendar2Date, Clock, Palette, X } from 'react-bootstrap-icons';

const AddNewTodo = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [text, setText] = React.useState('');
  const [day, setDay] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());

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
    <div className='AddNewTodo'>
      <div className='btn'>
        <button className='btn' onClick={() => setShowModal(true)}>
          + New Todo
        </button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form>
              <div>
                <div className='text'>
                  <h3>Add new to do!</h3>
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
                    <div className='project active'>personal</div>
                    <div className='project'>animals</div>
                    <div className='project'>personal</div>
                    <div className='project'>animals</div>
                    <div className='project'>personal</div>
                  </div>
                </div>
                <div className='cancel' onClick={() => setShowModal(false)}>
                  <X size='40' />
                </div>
                <div className='confirm'>
                  <button>+ Add to do</button>
                </div>
              </div>
            </form>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
