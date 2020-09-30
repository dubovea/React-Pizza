import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Categories,
  PizzaBlock,
  SortPopup,
  PizzaLoadingBlock,
} from "../components";

import { setCategory } from "../redux/actions/filters";
import { getPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortNames = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPizzas());
  }, []);

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback((i) => {
    dispatch(setCategory(i));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortNames}></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} isLoading={true} />
            ))
          : Array(12).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
