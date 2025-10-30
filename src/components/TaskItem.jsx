import { Link } from "react-router-dom";
import { useState } from "react";

function TaskItem({ task, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.description);

  const handleSave = () => {
    onUpdate({ ...task, title: editTitle, description: editDesc });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.status}`}>
      {isEditing ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <button onClick={handleSave}>💾 Save</button>
        </>
      ) : (
        <>
          <h3>
            {task.title}{" "}
            <span className="status">
              [{task.status === "completed" ? "✅" : "⏳"}]
            </span>
          </h3>
          <p>{task.description}</p>
          <p className="date">🕒 {task.createdAt}</p>
          <div className="actions">
            <button onClick={() => onToggle(task.id)}>
              {task.status === "completed" ? "↩️ Undo" : "✅ Complete"}
            </button>
            <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
            <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
            <Link to={`/task/${task.id}`}>🔍 Details</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
