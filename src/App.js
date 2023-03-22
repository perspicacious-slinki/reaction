import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>YEEEEEEEEEEEEEEEEEEEAH BOIIIIIIIIIIIIIII</button>
  );
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function Fruits() {
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <MyButton />
          <Fruits />
        </p>
        <a
          className="App-link"
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
