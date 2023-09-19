import React, { useState } from 'react';
import { addTodo } from './todosSlice';
import { useAppDispatch } from '../../app/hooks';

const AddTodoForm = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length === 0) return;

    dispatch(addTodo({ title }));

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-row">
      <div className="d-flex align-items-center flex-grow-1">
        <label htmlFor="formTitle" className="me-3">
          New Todo
        </label>
        <input
          id="formTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="me-1 flex-grow-1"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
