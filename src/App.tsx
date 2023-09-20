import { Toaster } from 'react-hot-toast';
import './styles/App.css';
import AddTodoForm from './features/todos/AddTodoForm';
import TodosList from './features/todos/TodosList';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterInput from './features/filter/FilterInput';

function App() {
  return (
    <main className="App">
      <h2 className="text-center mt-4 mb-3">Todos</h2>
      <AddTodoForm />
      <div className="bg-light py-4 shadow rounded-3 px-4 mt-3">
        <FilterInput />
        <TodosList />
        <Toaster />
      </div>
    </main>
  );
}

export default App;
