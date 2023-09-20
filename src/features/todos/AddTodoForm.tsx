import React, { useEffect, useRef, useState } from 'react';
import { addTodo } from './todosSlice';
import { useAppDispatch } from '../../app/hooks';

const AddTodoForm = () => {
  const [title, setTitle] = useState<string>('');
  const titleInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const focusOnTitleInput = () => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  };

  // Focus on adding new todos when page is loaded
  useEffect(() => {
    focusOnTitleInput();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length === 0) return;

    dispatch(addTodo({ title }));

    setTitle('');
    focusOnTitleInput();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-items-center">
      <div className="d-flex align-items-center flex-grow-1">
        <input
          id="formTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control me-2 lh-lg flex-grow-1"
          placeholder="Take out garbage"
          autoComplete="off"
          ref={titleInputRef}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add New Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
