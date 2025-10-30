import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    const found = saved.find((t) => t.id === Number(id));
    setTask(found);
  }, [id]);

  if (!task) return <p>Task not found</p>;

  return (
    <div className="task-details">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Created at: {task.createdAt}</p>
      <Link to="/">⬅️ Back</Link>
    </div>
  );
}

export default TaskDetails;
