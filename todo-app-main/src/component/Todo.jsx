// import React from "react";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";
import iconcross from "../../images/icon-cross.svg" 
import { IoIosCheckmark } from "react-icons/io";

const Todo = ({
  completedTodo,
  
  filteredTodos,
  setTodoList,
  handleCompleted,
  todoList,
}) => {
  // Save todos to local storage

  return (
    <div
      style={{ backgroundColor: " hsl(237, 14%, 26%)" }}
      className=" w-[85%] lg:w-[40%] mx-auto mt-5 pb-2 rounded-lg"
    >
      <div className="container w-11/12 mx-auto items-center justify-center">
        <div>
          {filteredTodos().map((todo) => (
            <div key={todo.id}>
              <div className="flex items-center justify-between p-3 rounded-lg">
                <div className="flex gap-3">
                  <button onClick={() => completedTodo(todo.id)}>
                    {todo.completed ? (
                      <IoIosCheckmark
                        size={24}
                        className="text-gray-400 bg-gradient-to-r from-blue-500 via-purple-500 rounded-full "
                      />
                    ) : (
                      <MdRadioButtonUnchecked
                        size={26}
                        className="text-gray-400"
                      />
                    )}
                  </button>
                  <span
                    className={
                      todo.completed
                        ? "text-gray-400 line-through"
                        : "text-white"
                    }
                  >
                    {todo.task}
                  </span>
                </div>
                <button
                  onClick={() =>
                    setTodoList(todoList.filter((t) => t.id !== todo.id))
                  }
                >
                  <img src={iconcross} alt="" />
                </button>
              </div>
              <hr />
            </div>
          ))}
          <div className="flex justify-between p-4 text-gray-400">
            <div>{filteredTodos().length} items left</div>
            <button onClick={handleCompleted} className="hover:text-sky-700">
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
