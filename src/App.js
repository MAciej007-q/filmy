import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div class="mb-3">
            <label for="movie" class="form-label">Tytuł Filmu</label>
            <input type="text" class="form-control" id="movie" aria-describedby="emailHelp" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
