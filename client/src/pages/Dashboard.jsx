import React from 'react'
import TaskCard from '../components/TaskCard.jsx';

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
  return (
    <div>
      <h1>Dashboard</h1>

      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} priority={task.priority} status={task.status} />
      ))}
    </div>
  )
}

export default Dashboard;
