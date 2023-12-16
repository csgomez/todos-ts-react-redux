import { useState } from 'react';
import { Todo } from './todosSlice';
import TodoItemView from './TodoItemView';
import TodoItemEdit from './TodoItemEdit';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [editMode, setEditMode] = useState(false);

  const enableEditMode = () => {
    setEditMode(true);
  };

  const disableEditMode = () => {
    setEditMode(false);
  };

  return (
    <div className="list-group-item list-group-item-action d-flex align-items-center border rounded-2 py-3 shadow-sm">
      {editMode ? (
        <TodoItemEdit todo={todo} onEditDisable={disableEditMode} />
      ) : (
        <TodoItemView todo={todo} onEditEnable={enableEditMode} />
      )}
    </div>
  );
};

export default TodoItem;
