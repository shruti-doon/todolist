import React, { useState, useEffect } from "react";

const getLocalItems = () => {
  let tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

function ToDoList() {
  const [tasks, setTasks] = useState(getLocalItems());
  const [newTask, setNewTask] = useState("");

  function inputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    } else {
      alert("Task cannot be empty");
    }
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      return updatedTasks;
    });
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return;
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      return updatedTasks;
    });
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="max-w-md mx-auto mt-8">
        <div className="text-3xl font-bold mb-4">To-Do List</div>
        <div>
          <input
            className="flex-1 mr-2 border border-gray-300 px-3 py-1 rounded-lg focus:border-slate-950"
            type="text"
            placeholder="Enter the task...."
            value={newTask}
            onChange={inputChange}
            onKeyPress={handleKeyPress}
          />
          <button
            className="border border-gray-700 rounded-lg p-1 hover:bg-slate-800 hover:text-white"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        {tasks.length > 0 ? (
          <ol className="m-3 p-4 border-4 font-mono">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-4 border-2 p-2 hover:bg-slate-300"
              >
                <div>
                <input type="checkbox"></input>
                <span className="mx-1">{task}</span></div>
                <div className="flex">
                  <button
                    className="p-1 mx-1 bg-sky-950 text-white rounded-md hover:bg-sky-700"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                  {index > 0 && (
                    <button
                      className="p-1 mx-1 bg-blue-300 text-white rounded-md hover:bg-blue-600"
                      onClick={() => moveTaskUp(index)}
                    >
                      ⬆️
                    </button>
                  )}
                  {index < tasks.length - 1 && (
                    <button
                      className="p-1 mx-1 bg-blue-300 text-white rounded-md hover:bg-blue-600"
                      onClick={() => moveTaskDown(index)}
                    >
                      ⬇️
                    </button>)}
                    
                </div>
              </li>
            ))}
          </ol>) :( <p className="text-center my-5 font-mono">ToDo is empty</p>
                  )
        }
      </div>
    </>
  );
}

export default ToDoList;
