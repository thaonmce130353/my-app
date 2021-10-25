import { useState } from 'react';
import './App.scss';
import TodoList from './components/ToDoList';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Eating' },
    { id: 2, title: 'working' }
  ]);

  return (
    <div className="app">
      <h1>Welcome to react hooks</h1>
      <TodoList todos={todoList} onTodoList={handleTodoList} />
    </div>
  );

  function handleTodoList(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
}

export default App;
