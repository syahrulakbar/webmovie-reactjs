import React from "react";
import "../style/style.css";

const TabNav = (props) => {
  return (
    <form className="bg-black p-4 w-full">
      <div className=" container mx-auto flex justify-center">
        <div className=" w-full flex justify-center">
          <input
            onChange={(e) => props.setSearchValue(e.target.value)}
            value={props.value}
            type="text"
            placeholder="Search Movie"
            className=" p-4 w-full xl:w-1/3 text-gray-500 border rounded-md outline-none bg-slate-900 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </div>
    </form>
  );
};

export default TabNav;
