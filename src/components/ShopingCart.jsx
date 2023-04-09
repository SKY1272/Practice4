import React, { useMemo } from "react";
function TotalCal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}
function ShopingCart({ items }) {
  let total = useMemo(() => TotalCal(items), [items]);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id} {item.name}:${item.price}
          </li>
        ))}
      </ul>
      <p>total = ${total}</p>
    </div>
  );
}
export default ShopingCart;
