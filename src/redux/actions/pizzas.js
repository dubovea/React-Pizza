import Axios from "axios";

export const setLoaded = payload => ({
  type: "SET_LOADED",
  payload
})
export const getPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  Axios.get(`pizzas?${category!==null ? `category=${category}` : ""}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({
    data
  }) => {
    dispatch(setPizzas(data));
    dispatch(setLoaded(true));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});