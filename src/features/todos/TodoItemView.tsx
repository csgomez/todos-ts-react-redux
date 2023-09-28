import { Todo } from './Todo';
import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeTodo, updateTodo } from './todosSlice';

type TodoItemViewProps = {
  todo: Todo;
  onEditEnable: () => void;
};

const TodoItemView = ({ todo, onEditEnable }: TodoItemViewProps) => {
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
    <>
      <label className="d-flex gap-3 cursor-pointer flex-grow-1">
        <input
          type="checkbox"
          name={`isTodoCompleted-${todo.id}`}
          checked={todo.completed}
          onChange={handleCheckboxClick}
        />
        <span className="todo-title">{todo.title}</span>
      </label>
      <div className="opacity-on-hover d-flex">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={onEditEnable}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger ms-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItemView;
