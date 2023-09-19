import { Toaster } from 'react-hot-toast';
import './styles/App.css';
import AddTodoForm from './features/todos/AddTodoForm';
import TodosList from './features/todos/TodosList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <h2 className="text-center mt-4 mb-3">Todos</h2>
      <div className="App">
        <AddTodoForm />
      </div>
      <main className="App rounded-1 px-4 mt-3">
        <TodosList />
        <Toaster />
      </main>
    </div>
  );
}

export default App;
