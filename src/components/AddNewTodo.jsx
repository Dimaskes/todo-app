import React from 'react';
import Modal from './Modal';

import TodoForm from './TodoForm';

const AddNewTodo = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [text, setText] = React.useState('');
  const [day, setDay] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());

  const projects = [
    {
      id: 1,
      name: 'test1',
      numOfTodos: 0,
    },
    {
      id: 2,
      name: 'test2',
      numOfTodos: 2,
    },
    {
      id: 3,
      name: 'test3',
      numOfTodos: 1,
    },
  ];

  function handleSubmit(e) {}

  return (
    <div className='AddNewTodo'>
      <div className='btn'>
        <button className='btn' onClick={() => setShowModal(true)}>
          + New Todo
        </button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm
          handleSubmit={handleSubmit}
          heading='Add new to do!'
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
};

export default AddNewTodo;
