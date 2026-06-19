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
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-5 rounded-lg">
          <h2 className="text-xl font-bold">
            Total Tasks
          </h2>
          <p className="text-2xl">{totalTasks}</p>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-lg">
          <h2 className="text-xl font-bold">
            Completed
          </h2>
          <p className="text-2xl">{completedTasks}</p>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-lg">
          <h2 className="text-xl font-bold">
            Pending
          </h2>
          <p className="text-2xl">{pendingTasks}</p>
        </div>
      </div>

      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} priority={task.priority} status={task.status} />
      ))}
    </div>
  );
};

export default Dashboard;