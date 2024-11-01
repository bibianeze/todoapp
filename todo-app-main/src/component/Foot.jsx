import React from 'react'

const Foot = ({ setFilter }) => {
  return (
    <div className=" ">
      <div
        style={{ backgroundColor: " hsl(237, 14%, 26%)" }}
        className=" w-[85%] lg:w-[40%] flex p-2 justify-center mt-10 mx-auto rounded-lg"
      >
        <button
          onClick={() => setFilter("all")}
          className="text-gray-400 px-4 py-2 hover:text-sky-700"
        >
          All
        </button>
        <button
          onClick={() => setFilter("uncompleted")}
          className="text-gray-400 px-4 py-2 hover:text-sky-700"
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="text-gray-400 px-4 py-2 hover:text-sky-700"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Foot