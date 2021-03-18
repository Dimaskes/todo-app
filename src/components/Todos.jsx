import React from 'react';

import Todo from './Todo';
import Next7Days from './Next7Days';

const Todos = () => {
  const selectedProject = 'Next 7 days';
  const todos = [
    {
      id: 'mdw*2d!',
      text: 'Todo text 1',
      time: '10:00 PM',
      date: '12.04.2021',
      day: '6',
      checked: true,
      color: '#000000',
      project: 'personal',
    },
    {
      id: 'm!r3$*2d!',
      text: 'Todo text 2',
      time: '12:54 AM',
      date: '04.04.2021',
      day: '6',
      checked: false,
      color: 'green',
      project: 'work',
    },
  ];
  return (
    <div className='Todos'>
      <div className='selected-project'>{selectedProject}</div>
      <div className='todos'>
        {selectedProject === 'Next 7 dayds' ? (
          <Next7Days todos={todos} />
        ) : (
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  );
};

export default Todos;
