const TaskCard = ({title, description, priority, status,}) => {
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

      <p>
        Status:
        <span className="font-medium ml-1">
          {status}
        </span>
      </p>
    </div>
  );
};

export default TaskCard;