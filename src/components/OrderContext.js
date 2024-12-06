import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); 

  const addOrder = (newOrder) => {
    // Ensure newOrder is an object
    if (typeof newOrder === 'object' && newOrder !== null) {
      setOrders((prevOrders) => [...prevOrders, newOrder]); 
    } else {
      console.error('Invalid order data:', newOrder);
    }
  };

  const updateOrders = (updatedOrders) => {
    setOrders(updatedOrders); 
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
