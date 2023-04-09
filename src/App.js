import ShopingCart from "./components/ShopingCart";
import "./styles.css";

export default function App() {
  const items = [
    { id: 1, name: "Shirt", price: 20 },
    { id: 2, name: "Pants", price: 30 },
    { id: 3, name: "Shoes", price: 50 }
  ];
  return (
    <div className="App">
      <ShopingCart items={items} />
    </div>
  );
}
