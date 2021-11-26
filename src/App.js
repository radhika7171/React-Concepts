import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import Quantity from "./Quantity";

function App() {
  return (
    <div>
      <h1>Hello Radhika</h1>
      <h2>Order Selected</h2>
      <Product name="iPhone" price={1200} description="Rose Gold" />
      <h3>Select Quantity</h3>
      <Quantity />
    </div>
  );
}

export default App;
