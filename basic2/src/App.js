import logo from './logo.svg';
import './App.css';
import Product from "./components/Product"

function App() {
  const products = 
    [
      {
        id: "01",
        title: "Nirma", 
        price: "100",
        data: new Date(2024 , 8 , 10),
      },
      {
        id: "02",
        title: "Maggie", 
        price: "50",
        data: new Date(2024 , 4 , 11),
      },
      {
        id: "03",
        title: "Surf-Excel", 
        price: "150",
        data: new Date(2024 , 8 , 22),
      },
      {
        id: "04",
        title: "Vimal", 
        price: "40",
        data: new Date(2024 , 2 , 10),
      },
    ]
  
  return (
    <div className="App">
        <Product items={products}></Product>
    </div>
  );
}

export default App;
