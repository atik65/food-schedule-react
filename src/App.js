import "./App.css";
import FoodList from "./components/FoodList";
import Menu from "./components/Menu";
import data from "./components/foodData";
import { useState } from "react";

const categories = [
  "all",
  ...new Set(
    data.map((food) => {
      return food.category;
    })
  ),
];

function App() {
  const [Data, setData] = useState(data);

  const filter = (filter) => {
    if (filter === "all") {
      setData(data);
      return;
    }
    const filtered = data.filter((food) => {
      return food.category === filter;
    });

    setData(filtered);
  };
  return (
    <>
      <main className="container">
        <div className="text-center our-menu display-5  mt-4">
          <div>Our Menu</div>
          <div className="underline"></div>
        </div>
        <Menu categories={categories} filter={filter} />
        <FoodList data={Data} />
      </main>
    </>
  );
}

export default App;
