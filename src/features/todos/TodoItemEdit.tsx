import { useEffect, useRef, useState } from 'react';
import { Todo } from './Todo';
import { useAppDispatch } from '../../app/hooks';
import { updateTodo } from './todosSlice';

type TodoItemEditProps = {
  todo: Todo;
  onEditDisable: () => void;
};

const TodoItemEdit = ({ todo, onEditDisable }: TodoItemEditProps) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(todo.title);
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // TODO: Verify if this is handled correctly
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  const handleEdit = () => {
    const updatedTodo = {
      ...todo,
      title,
    };

    dispatch(updateTodo(updatedTodo));
    onEditDisable();
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control me-4"
        ref={titleInputRef}
      />
      <button
        className="btn btn-sm btn-outline-secondary ms-auto me-2"
        onClick={onEditDisable}
      >
        Cancel
      </button>
      <button className="btn btn-sm btn-outline-success" onClick={handleEdit}>
        Save
      </button>
    </>
  );
};

export default TodoItemEdit;
