import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";

export const TodoModal = ({ onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("pending");
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSaveTodo = async (e) => {
    e.preventDefault();
    console.log(taskName, taskStatus);
    const body = {
      title: taskName,
      status: taskStatus,
      userId: 1,
    };
    const res = await axios.post(`${API_URL}/todos`, body);
    if (res.status === 201) onClose();
  };
  return (
    <div className="absolute inset-0 bg-gray-400 opacity-90 flex items-center justify-center">
      <div className="w-100 mx-auto my-auto bg-white px-4 py-5 flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <h4 className="text-xl font-bold"> Add Task</h4>
          <button
            className="text-red-500 hover:bg-gray-200 rounded-full p-1 cursor-pointer"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        <div className="">
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => handleSaveTodo(e)}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Task Name</label>
              <input
                className="border border-gray-500 rounded-sm px-4 py-1"
                placeholder="Enter Task Name .."
                value={taskName}
                onChange={(e) => {
                  setTaskName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="status">Status</label>
              <select
                className="border border-gray-500 rounded-sm px-4 py-1"
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <option value="pending"> Pending </option>
                <option value="inProgress"> In Progress </option>
                <option value="completed"> Completed </option>
              </select>
            </div>
            <div className="flex flex-row gap-5 justify-end items-center">
              <button
                className="bg-red-500 text-white px-4 py-1 rounded-sm cursor-pointer"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-1 rounded-sm cursor-pointer"
                onClick={handleSaveTodo}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
