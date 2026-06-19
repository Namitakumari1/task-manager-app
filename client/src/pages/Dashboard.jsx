import { useState } from "react";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Module",
      description: "Finish learning React basics",
      priority: "High",
      status: "Pending",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTask = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status: "Pending",
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
    setPriority("Low");
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.status === "Completed").length;

  const pendingTasks = tasks.filter((task) => task.status === "Pending").length;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Status */}

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-5 rounded-lg">
          <h2 className="text-xl font-bold">Total Tasks</h2>
          <p className="text-2xl">{totalTasks}</p>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-lg">
          <h2 className="text-xl font-bold">Completed</h2>
          <p className="text-2xl">{completedTasks}</p>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-lg">
          <h2 className="text-xl font-bold">Pending</h2>
          <p className="text-2xl">{pendingTasks}</p>
        </div>
      </div>

      {/* Add Task Form */}

      <form onSubmit={addTask} className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Add New Task
        </h2>

        <input type="text" placeholder="Task Title" value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-md mb-4"
        />

        <textarea
          placeholder="Task Description" value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-md mb-4"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border p-3 rounded-md mb-4"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded-md">
          Add Task
        </button>
      </form>

      {/* Tasks */}

      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} description={task.description} priority={task.priority} status={task.status} />
      ))}
    </div>
  );
};

export default Dashboard;