// App.js
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <p>
        <nav>
          <strong>Welcome to React</strong>
        </nav>
      </p>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
