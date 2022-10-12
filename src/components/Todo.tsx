import Todo from '../models/todos';

type Props = {
	item: { text: string; id: string };
};

const TodoItem = ({ item }: Props) => {
	return (
		<li>
			{item.text}
			{item.id}
		</li>
	);
};

export default TodoItem;
