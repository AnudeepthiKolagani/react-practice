import axios from "axios";
import { useEffect, useState } from "react";
import { TodoCard } from "../components/TodoCard";
import { TodoSkeleton } from "../skeleton/Todo.Skeleton";
import { TodoModal } from "../components/modals/Todo.Modal";

export const Todo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${API_URL}/todos`);
        console.log("get todos response-->", res);
        if (res.status === 200) {
          setTodos(res.data);
        }
      } catch (err) {
        console.log("Error while fetching todos list", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, [isModalOpen]);

  const handleAddTodo = () => {
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <TodoSkeleton />;
  }

  return (
    <div className="flex my-10 flex-col">
      <div className="flex justify-end">
        <button
          className="px-4 py-1 rounded-xl border border-green-700 hover:bg-green-700 hover:text-white cursor-pointer"
          onClick={handleAddTodo}
        >
          {" "}
          Add +
        </button>
      </div>
      <div className="my-10 grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {todos.map((todo) => {
          return (
            <>
              <TodoCard key={todo.id} todo={todo} setTodos={setTodos} />
            </>
          );
        })}
      </div>

      {isModalOpen && <TodoModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
