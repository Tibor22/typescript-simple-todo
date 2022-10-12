import './App.css';
import Todos from './components/Todos';
import Todo from './models/todos';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
	const [todos, setTodos] = useState([]);
	// const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];
	console.log(todos);
	return (
		<div>
			<Todos items={todos} />
			<NewTodo items={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
