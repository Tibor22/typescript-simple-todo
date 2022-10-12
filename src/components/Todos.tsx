import Todo from '../models/todos';
import TodoItem from './Todo';

type Props = {
	items: Todo[];
};

const Todos = (props: Props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<TodoItem item={item} />
			))}
		</ul>
	);
};

export default Todos;
