import React from "react";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const tasks = [
    {
      id: 1,
      title: "Complete React Module",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Practice JavaScript",
      priority: "Medium",
      status: "Completed",
    },
  ];

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === "Completed").length;
  const pendingTasks = tasks.filter((task) => task.status === "Pending").length;

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Total Tasks: {totalTasks}</h3>
      <h3>Completed Tasks: {completedTasks}</h3>
      <h3>Pending Tasks: {pendingTasks}</h3>

      <hr />

      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} priority={task.priority} status={task.status} />
      ))}
    </div>
  );
};

export default Dashboard;