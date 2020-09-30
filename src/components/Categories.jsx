import React from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (i) => {
    setActiveItem(i);
    onClickItem(i);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => setActiveItem(null)}
          className={activeItem === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((name, i) => (
            <li
              className={activeItem === i ? "active" : ""}
              onClick={() => onSelectItem(i)}
              key={`${name}_${i}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onSelectItem = (index) => {
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
//               onClick={() => this.onSelectItem(i)}
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
