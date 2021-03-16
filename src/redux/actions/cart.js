export const addPizzaToCart = (pizzaObj) => ({
    type: "ADD_PIZZA_CART",
    payload: pizzaObj
});

export const clearCart = () => ({
    type: "CLEAR_CART",
});

export const removeCartItem = (pizzaId) => ({
    type: "REMOVE_CART_ITEM",
    payload: pizzaId
});

export const inceremtItem = (pizzaId) => ({
    type: "INCEREMENT_ITEM",
    payload: pizzaId
});

export const decrementItem = (pizzaId) => ({
    type: "DECREMENT_ITEM",
    payload: pizzaId
});