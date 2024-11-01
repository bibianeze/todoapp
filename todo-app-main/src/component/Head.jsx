import React from "react";
import { MdRadioButtonUnchecked } from "react-icons/md";

const Head = ({ handleInputChange, handleSubmit, newTodoList, toggleDayNight }) => {
  return (
    <div className="w-[85%] lg:w-[40%] mx-auto  rounded-lg">
      <div className="">
        <div className="flex justify-between pt-10 items-center">
          <h1 className="text-white text-3xl py-6">Todo</h1>
          <button onClick={toggleDayNight} className="">
            <img src="../../images/icon-sun.svg" alt="" />
            
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{ backgroundColor: " hsl(237, 14%, 26%)" }}
          className="text-center px-7 flex items-center rounded-lg bg-white"
        >
          <div className="text-gray-400 text-center">
            <MdRadioButtonUnchecked size={26} />
          </div>
          <input
            style={{ backgroundColor: " hsl(237, 14%, 26%)" }}
            type="text"
            placeholder="Create a new Todo...."
            className="w-full items-center p-4  outline-none"
            draggable="true"
            onChange={handleInputChange}
            value={newTodoList}
          />
        </form>
      </div>
    </div>
  );
};

export default Head;
