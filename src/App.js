import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// dynamically sets up functionality so we only get unique categories from the list | creates an array (.map) that displays all of the categories then filters out duplicated categories using new Set
const allCategories = ["all",...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  // using setMenuItems to change the list that is displayed when filtering by category
  const filterItems = (category) => {
    // if category = all set menuItems back to default items array
    if (category === "all"){
      setMenuItems(items);
      return;
    }
    // if the item category property matches the string being passed in return that item to the newItems array
    const newItems = items.filter((item)=> item.category === category)
    // passing in the newItems prop to the setMenuItems array
    setMenuItems(newItems)
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Earth Wind & Flour Restaurant Menu</h2>
          <div className="underline"></div>
        </div>
        {/* Used in the manual method */}
        {/* passing in the filterItems prop */}
        {/* <Categories filterItems={filterItems}/> */}
        {/* passing in the categories prop and the filterItems prop to use them  */}
        <Categories categories={categories} filterItems={filterItems}/>

        {/* passing in the menuItems prop to access the data in the menu */}
        <Menu items={menuItems}/>
      </section>
    </main>

  );
}

export default App;
