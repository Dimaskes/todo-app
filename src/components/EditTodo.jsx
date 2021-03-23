import React from 'react';

import TodoForm from './TodoForm';

const EditTodo = () => {
  const [text, setText] = React.useState('');
  const [day, setDay] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());
  const [todoProject, setTodoProject] = React.useState('');

  const projects = [
    { id: 1, name: 'test1', numOfTodos: 0 },
    { id: 2, name: 'test2', numOfTodos: 2 },
    { id: 3, name: 'test3', numOfTodos: 1 },
  ];

  function handleSubmit(e) {}

  return (
    <div className='EditTodo'>
      <div className='header'>Edit Todo</div>
      <div className='container'>
        <TodoForm
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          todoProject={todoProject}
          setTodoProject={setTodoProject}
          projects={projects}
        />
      </div>
    </div>
  );
};

export default EditTodo;
