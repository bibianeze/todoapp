import React from "react";
import desktopdark from "../../images/bg-desktop-dark.jpg";
import Head from "./Head";

const Header = ({
  handleInputChange,
  setFilter,
  handleSubmit,
  newTodoList,
  toggleDayNight,
}) => {
  return (
    <div className="w-full h-48 bg-img">
      <Head
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        newTodoList={newTodoList}
        toggleDayNight={toggleDayNight}
      />
    </div>
  );
};

export default Header;
