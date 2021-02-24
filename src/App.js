import './App.css';

import Sidebar from './components/Sidebar';
import AddNewTodo from './components/AddNewTodo';
import User from './components/User';
import Calendar from './components/Calendar';
import Projects from './components/Projects';

import Main from './components/Main';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className='App'>
      <Sidebar>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </Sidebar>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
