import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Hello Radhika</h1>
      <Product name="iPhone" price={1200} description="Rose Gold" />
    </div>
  );
}

export default App;
