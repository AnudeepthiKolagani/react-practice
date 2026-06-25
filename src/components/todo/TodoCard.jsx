import axios from "axios";
import { Check, CheckCircleIcon, Edit, Timer, Trash } from "lucide-react";

export const TodoCard = ({ todo, setTodos }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const handleDeleteTodo = async (todoId) => {
    const res = await axios.delete(`${API_URL}/todos/${todoId}`);
    console.log("Delete res-->", res);
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <div
      className={` flex flex-col justify-between px-4 py-2 rounded-xl  border-2  ${todo.status === "completed" ? "border-green-400 " : todo.status === "inProgress" ? "border-blue-400" : "border-gray-300"}`}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-base font-bold truncate">{todo.title}</h3>
        {/* TODO: Update todo task */}
        <button className="cursor-pointer">
          <Edit size={20} />
        </button>
      </div>
      <p className="text-end">By: {todo.userId}</p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1">
          <button>
            {todo.status === "completed" ? (
              <Check size={20} className="text-green-500" />
            ) : todo.status === "inProgress" ? (
              <Timer size={20} className="text-blue-500" />
            ) : (
              ""
            )}
          </button>
          <p
            className={` font-bold ${todo.status === "completed" ? "text-green-400 " : todo.status === "inProgress" ? "text-blue-400" : "text-gray-700"}`}
          >
            {todo.status}
          </p>
        </div>
        <button
          className="cursor-pointer text-red-500"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <Trash size={20} />
        </button>
        {/* TODO: Mark as complete */}
        {todo.status !== "completed" && <CheckCircleIcon size={20} />}
      </div>
    </div>
  );
};
