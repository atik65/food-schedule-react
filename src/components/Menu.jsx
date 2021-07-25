import React from "react";

const Menu = ({ filter, categories }) => {
  return (
    <>
      <div className="row mt-4 pt-2">
        {categories.map((time, index) => {
          return (
            <div key={index} className="col-6  col-md-3 my-2">
              <button onClick={() => filter(time)} className="btn btn-food">
                {time}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
