const TaskCard = ({
  task,
  id,
  title,
  description,
  priority,
  status,
  completeTask,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="text-gray-600 my-2">
        {description}
      </p>

      <p>
        Priority:
        <span className="font-medium ml-1">
          {priority}
        </span>
      </p>

      <p className="mb-4">
        Status:
        <span className="font-medium ml-1">
          {status}
        </span>
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => completeTask(id)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Complete
        </button>

        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(id)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;