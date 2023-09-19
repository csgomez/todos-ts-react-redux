import { Todo } from './Todo';
import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeTodo, updateTodo } from './todosSlice';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);

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
    <div className="list-group-item d-flex align-items-center rounded-3 py-3">
      <label className="d-flex gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxClick}
        />
        <span className="todo-title">{todo.title}</span>
      </label>
      <button className="btn btn-sm btn-outline-secondary ms-auto">Edit</button>
      <button
        className="btn btn-sm btn-outline-danger ms-2"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
