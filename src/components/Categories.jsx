import React from "react";
import PropTypes from "prop-types";
const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, i) => (
            <li
              className={activeCategory === i ? "active" : ""}
              onClick={() => onClickCategory(i)}
              key={`${name}_${i}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onSelectCategory = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, i) => (
//             <li
//               className={this.state.activeItem === i ? "active" : ""}
//               onClick={() => this.onSelectCategory(i)}
//               key={`${name}_${i}`}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
