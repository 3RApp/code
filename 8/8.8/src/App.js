import logo from './logo.svg';
import './App.css';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <p>
        <nav>
          <strong>Welcome to React</strong>
        </nav>
      </p>
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </div>
  );
}

export default App;
