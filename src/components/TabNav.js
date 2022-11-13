import React from "react";
import "../style/style.css";

const TabNav = (props) => {
  return (
    <form className="bg-black p-4 w-full">
      <div className=" container mx-auto flex justify-center">
        <div className="relative ">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            onChange={(e) => props.setSearchValue(e.target.value)}
            value={props.value}
            type="text"
            placeholder="Search Movie"
            className=" py-3 pl-16 pr-10 md:w-[30rem] text-gray-500 border rounded-md outline-none bg-slate-900 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </div>
    </form>
  );
};

export default TabNav;
