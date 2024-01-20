import AddTodoForm from './features/todos/AddTodoForm';
import TodosList from './features/todos/TodosList';
import FilterInput from './features/filter/FilterInput';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <>
      <main className="App">
        <h2 className="text-center fw-bold text-primary pt-4 mb-3">Todos</h2>
        <AddTodoForm />
        <div className="bg-light py-4 shadow rounded-3 px-4 mt-3 mb-4">
          <FilterInput />
          <TodosList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
