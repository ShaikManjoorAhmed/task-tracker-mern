import { useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks }) {

  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {

      await API.post("/tasks", {
        title
      });

      setTitle("");

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="What's your next goal?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>Add Task</button>

    </form>
  );
}

export default TaskForm;