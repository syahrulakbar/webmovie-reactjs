import React from "react";
import "../style/style.css";

const TabNav = (props) => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <form>
            <input value={props.value} onChange={(e) => props.setSearchValue(e.target.value)} type="text" className="px-4 py-2 rounded-md" placeholder="Search Movie" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TabNav;
