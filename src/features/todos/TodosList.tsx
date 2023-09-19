import { useSelector } from 'react-redux';
import { selectFilteredTodos } from './todosSlice';
import TodoItem from './TodoItem';

const TodosList = () => {
  const allTodos = useSelector(selectFilteredTodos);

  if (allTodos.length === 0) return <p>No Todos....</p>;

  return (
    <div className="list-group gap-3">
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
