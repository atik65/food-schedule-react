import React from "react";

const FoodList = ({ data }) => {
  return (
    <>
      <div className="row gy-4 mt-3">
        {data.map((food) => {
          const { id, name, price, des, img } = food;

          return (
            <div key={id} className="col-md-4 food-card">
              <div className="row ">
                <div className="col text-center food-img">
                  <a href="">
                    <img src={img} alt={name} />
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-6 name">{name}</div>
                <div className="col-6 text-end  price">
                  <span>${price}</span>
                </div>
              </div>

              <div className="row">
                <div className="col des">
                  <p>{des}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodList;
