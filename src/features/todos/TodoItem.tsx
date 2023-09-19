import { Todo } from './Todo';
import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeTodo, updateTodo } from './todosSlice';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTodo = {
      ...todo,
      completed: e.target.checked,
    };
    dispatch(updateTodo(updatedTodo));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="list-group-item list-group-item-action d-flex align-items-center border rounded-2 py-3 shadow-sm">
      <label className="d-flex gap-3 cursor-pointer flex-grow-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxClick}
        />
        <span className="todo-title">{todo.title}</span>
      </label>
      <div className="opacity-on-hover ms-auto">
        <button className="btn btn-sm btn-outline-secondary">Edit</button>
        <button
          className="btn btn-sm btn-outline-danger ms-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
