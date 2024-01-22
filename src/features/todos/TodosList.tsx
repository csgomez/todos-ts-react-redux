import { useSelector } from 'react-redux';
import { selectFilteredTodos } from './todosSlice';
import TodoItem from './TodoItem';
import { selectStatusFilter } from '../filter/filterSlice';

const TodosList = () => {
  const allTodos = useSelector(selectFilteredTodos);
  const currentStatusFilter = useSelector(selectStatusFilter);

  if (allTodos.length === 0) {
    // "No completed Todos" || "No incomplete Todos" || "No Todos"
    const messageModifier =
      currentStatusFilter === 'all' ? '' : currentStatusFilter;

    return (
      <p className="text-secondary-emphasis fw-bold mt-4 mb-2">
        No {messageModifier} Todos....
      </p>
    );
  }

  return (
    <ul className="list-group gap-3">
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
