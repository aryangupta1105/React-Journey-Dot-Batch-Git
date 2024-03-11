import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemPrice from './components/ItemPrice'
import Card from './components/Card.js'

function App() { 
  const response = [
    {
      name:"Nirma",
      itemPrice: "30", 
      currency: "Yen",
      quantity: "per Pack",
    },
    {
      name:"Santoor",
      itemPrice: "40", 
      currency: "Rupees",
      quantity: "per Soap",
    },
    {
      name:"Maggi",
      itemPrice: "1", 
      currency: "Dollar",
      quantity: "per Pack",
    },
  ]
  return (
      <div className='cardBox'> 
        <Card>
        <div className="itemCard">
        <Item name={response[0].name}></Item>
        <ItemPrice currency={response[0].currency} quantity = {response[0].quantity} price= {response[0].itemPrice}></ItemPrice>
        </div>
        <div className="itemCard">
        <Item name={response[1].name}></Item>
        <ItemPrice currency={response[1].currency} quantity = {response[1].quantity} price= {response[1].itemPrice}></ItemPrice>
        </div>
        <div className="itemCard">
        <Item name={response[2].name}></Item>
        <ItemPrice currency={response[2].currency} quantity = {response[2].quantity} price= {response[2].itemPrice}></ItemPrice>
        </div>
        </Card>
    <div className="App">
      Hello Aryan
    </div>
      </div>
  );
}

export default App;
