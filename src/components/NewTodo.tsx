import { RecordWithTtl } from 'dns';
import React, { useState } from 'react';
import Todo from '../models/todos';
type data = {
	text: string;
};

type Props = {
	items: { text: string; id: string }[];
	setTodos: Function;
};

const NewTodo = ({ items, setTodos }: Props) => {
	let data1: data;
	data1 = {
		text: '',
	};
	const [formData, setFormData] = useState(data1);

	console.log(formData);
	const submitForm = (e: React.FormEvent) => {
		e.preventDefault();

		const newTodo = new Todo(formData.text);

		setTodos((prevTodos: []) => [...prevTodos, newTodo]);
		setFormData({ text: '' });
	};
	const onChange = (e: any) => {
		const { value, name } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	return (
		<form onSubmit={submitForm}>
			<label>
				<input
					value={formData.text}
					name='text'
					onChange={onChange}
					type='text'
				/>
			</label>
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
