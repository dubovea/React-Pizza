const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}
const cart = (state = initialState, action) => {
    const removeCart = () => {
        const newItems = {
                ...state.items
            },
            currentTotalPrice = newItems[action.payload].totalPrice,
            currentTotalCount = newItems[action.payload].items.length;
        delete newItems[action.payload];
        return {
            ...state,
            items: newItems,
            totalCount: state.totalCount - currentTotalCount,
            totalPrice: state.totalPrice - currentTotalPrice,
        };
    };
    const addItem = (massive, price) => {
        const id = action.payload.hasOwnProperty("id") ? action.payload.id : action.payload;
        return {
            ...state,
            items: {
                ...state.items,
                [id]: {
                    items: massive,
                    totalPrice: massive.reduce((sum, curr) => curr.price + sum, 0),
                    totalCount: massive.length
                }
            },
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + price
        }
    };
    switch (action.type) {
        case "ADD_PIZZA_CART": {
            const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload];
            return addItem(currentPizzaItems, action.payload.price);
        }
        case "CLEAR_CART": {
            return {
                items: {},
                totalCount: 0,
                totalPrice: 0
            };
        }
        case "REMOVE_CART_ITEM": {
            return removeCart();
        }
        case "INCEREMENT_ITEM": {
            let pizzaItems = state.items[action.payload].items;
            pizzaItems = [...pizzaItems, pizzaItems[0]];
            return addItem(pizzaItems, pizzaItems[0].price);
        }
        case "DECREMENT_ITEM": {
            const pizzaItems = state.items[action.payload].items;
            if (pizzaItems.length === 1) {
                return removeCart();
            } else {
                pizzaItems.length -= 1;
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [action.payload]: {
                            items: pizzaItems,
                            totalPrice: pizzaItems.reduce((sum, curr) => curr.price + sum, 0),
                            totalCount: pizzaItems.length
                        }
                    },
                    totalCount: state.totalCount - 1,
                    totalPrice: state.totalPrice - pizzaItems[0].price
                };
            }
        }
        default:
            return state;
    }
}

export default cart;