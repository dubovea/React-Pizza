const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}
const getTotalPrice = arr => arr.reduce((sum, curr) => curr.price + sum, 0);
const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_CART":
            const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload];
            return {
                ...state,
                items: {
                        ...state.items,
                        [action.payload.id]: {
                            items: currentPizzaItems,
                            totalPrice: getTotalPrice(currentPizzaItems)
                        }
                    },
                    totalCount: state.totalCount + 1,
                    totalPrice: state.totalPrice + action.payload.price
            }
            case "CLEAR_CART":
                return {
                    items: {},
                        totalCount: 0,
                        totalPrice: 0
                }
                default:
                    return state;
    }
}

export default cart;