export const addItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(item => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItem = (cartItems, itemToClear) => {
  return cartItems.filter(item => item.id !== itemToClear.id);
};

export const removeItem = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find(item => item.id === itemToRemove.id);

  if (existingItem) {
    if (existingItem.quantity === 1) {
      return clearItem(cartItems, itemToRemove);
    }

    return cartItems.map(item =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  return [...cartItems];
};
