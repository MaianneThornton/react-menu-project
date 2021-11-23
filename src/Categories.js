import React from 'react';

// // manual approach
// const Categories = ({ filterItems }) => {
//   return (
//     <div className="btn-container">
//       <button className="filter-btn" onClick={() => filterItems("all")}>
//         all
//       </button>
//       <button className="filter-btn" onClick={() => filterItems("breakfast")}>
//         breakfast
//       </button>
//     </div>
//   );
// };
// dynamic approach (in sync with the data, any changes added to the data.js is immediately represented on the page)
// passing in the categories prop from app.js
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/* creating a new array and returning a button for each category */}
      {categories.map((category, index) => {
        return (
          // onClick return only the items that match the category clicked
          <button type="button" className="filter-btn" key="{index}" onClick={()=> filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
