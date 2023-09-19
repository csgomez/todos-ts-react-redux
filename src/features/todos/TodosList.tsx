import { useSelector } from 'react-redux';
import { _selectFilteredTodos } from './todosSlice';
import { Todo } from './Todo';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className="list-group-item rounded-3 py-3">
      {todo.title} --- {JSON.stringify(todo.completed)}
    </div>
  );
};

const TodosList = () => {
  const allTodos = useSelector(_selectFilteredTodos);

  if (allTodos.length === 0) return <p>No Todos....</p>;

  return (
    <div className="list-group gap-2">
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
