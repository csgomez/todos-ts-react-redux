import { Toaster } from 'react-hot-toast';
import './styles/App.css';
import FilterInput from './features/filter/FilterInput';
import AddTodoForm from './features/todos/AddTodoForm';
import TodosList from './features/todos/TodosList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className="App bg-light rounded-1 mt-sm-3 p-3 shadow">
      <h3 className="text-center">Todos</h3>
      <AddTodoForm />
      <br />
      <FilterInput />
      <br />
      <TodosList />
      <Toaster />
    </main>
  );
}

export default App;
