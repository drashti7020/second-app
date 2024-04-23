// import React, { useState } from 'react';

// const Product = ({ id, name, price, addToCart }) => {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>Price: ${price}</p>
//       <button onClick={() => addToCart(id, name, price)}>Add to Cart</button>
//     </div>
//   );
// };

// const Cart = ({ items }) => {
//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} - ${item.price} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const Appcart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const addToCart = (id, name, price) => {
//     const itemIndex = cart.findIndex(item => item.id === id);
//     if (itemIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[itemIndex].quantity += 1;
//       setCart(updatedCart);
//     } else {
//       const newItem = { id, name, price, quantity: 1 };
//       setCart([...cart, newItem]);
//     }
//     setTotal(total + price);
//   };

//   return (
//     <div>
//       <h1>Shopping App</h1>
//       <div>
//         <Product id={1} name="Product 1" price={10} addToCart={addToCart} />
//         <Product id={2} name="Product 2" price={15} addToCart={addToCart} />
//         {/* Add more products here */}
//       </div>
//       <Cart items={cart} />
//       <h3>Total: ${total}</h3>
//     </div>
//   );
// };

// export default Appcart;

import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a CartContext
const CartContext = createContext();

// Step 2: Create a CartContextProvider component
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (id, name, price) => {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { id, name, price, quantity: 1 };
      setCart([...cart, newItem]);
    }
    setTotal(total + price);
  };

  const values = {
    cart,
    total,
    addToCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

// Step 3: Use useContext hook in child components
const Product = ({ id, name, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(id, name, price)}>Add to Cart</button>
    </div>
  );
};

const Cart = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

const Appcart = () => {
  return (
    <CartContextProvider>
      <div>
        <h1>Shopping App</h1>
        <Product id={1} name="Product 1" price={10} />
        <Product id={2} name="Product 2" price={15} />
        {/* Add more products here */}
        <Cart />
      </div>
    </CartContextProvider>
  );
};

export default Appcart;

