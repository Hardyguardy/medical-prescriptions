import React from "react";
import { doctors } from "../assets/assets";

const TopDoctors = () => {
  return (
    <div>
      <h1>Top Doctors</h1>
      <p>Check our best doctors</p>
      <div>
        {doctors.slice(0, 10).map((item, index) => (
          <div>
            <img src={item.image} alt="" />
            <div>
              <div>
                <p></p>
                <p>Available</p>
              </div>
              <p>{item.name}</p>
              <p>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button>more</button>
    </div>
  );
};

export default TopDoctors;
