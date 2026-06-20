import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { getTasks, createTask, deleteTask, completeTask, updateTask, } from "../api/taskApi";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const [editId, setEditId] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Low");


    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (e) => {
        e.preventDefault();

        if (editId) {
            await updateTask(editId, {
                title,
                description,
                priority,
            });

            await fetchTasks();

            setEditId(null);

            setTitle("");
            setDescription("");
            setPriority("Low");

            return;
        }

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

        await createTask(newTask);

        await fetchTasks();

        setTitle("");
        setDescription("");
        setPriority("Low");
    };

    const handleComplete = async (id) => {
        await completeTask(id);

        await fetchTasks();
    };

    const handleEdit = (task) => {
        setEditId(task._id);

        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
    };

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter((task) => task.status === "Completed").length;

    const pendingTasks = tasks.filter((task) => task.status === "Pending").length;

    const filteredTasks = tasks.filter((task) => {
        const matchesFilter = filter === "All" ? true : task.status === filter;
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Dashboard
            </h1>

            {/* Filter Buttons */}

            <div className="flex gap-3 mb-6">
                <button
                    type="button"
                    onClick={() => setFilter("All")}
                    className={`px-4 py-2 rounded-md font-medium transition ${filter === "All"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                >
                    All
                </button>

                <button
                    type="button"
                    onClick={() => setFilter("Pending")}
                    className={`px-4 py-2 rounded-md font-medium transition ${filter === "Pending"
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                >
                    Pending
                </button>

                <button
                    type="button"
                    onClick={() => setFilter("Completed")}
                    className={`px-4 py-2 rounded-md font-medium transition ${filter === "Completed"
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                >
                    Completed
                </button>
            </div>

            {/*Search Task*/}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="🔍 Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border p-3 rounded-md"
                />
            </div>

            {/* Task Status */}
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
                    {editId ? "Update Task" : "Add Task"}
                </button>
            </form>

            {/* Tasks */}

            {filteredTasks.map((task) => (
                <TaskCard
                    key={task._id}
                    task={task}
                    id={task._id}
                    title={task.title}
                    description={task.description}
                    priority={task.priority}
                    status={task.status}
                    completeTask={handleComplete}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
};

export default Dashboard;