import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import API from "../services/api";
import "../styles/home.css";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTask = async (id, completed) => {
  try {
    await API.put(`/tasks/${id}`, {
      completed: !completed
    });

    fetchTasks();
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (id) => {
  try {
    await API.delete(`/tasks/${id}`);

    fetchTasks();
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);

 const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  if (filter === "completed") {
    return matchesSearch && task.completed;
  }

  if (filter === "pending") {
    return matchesSearch && !task.completed;
  }

  return matchesSearch;
});
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="hero">
          <h1>Stay Productive.</h1>
          <p>
            Organize your tasks, track progress and keep moving forward.
          </p>
        </div>
    <div className="search-box">

  <input
    type="text"
    placeholder="Search tasks..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
  />
<div className="filter-buttons">

  <button
    className={filter === "all" ? "active" : ""}
    onClick={() => setFilter("all")}
  >
    All
  </button>

  <button
    className={filter === "completed" ? "active" : ""}
    onClick={() => setFilter("completed")}
  >
    Completed
  </button>

  <button
    className={filter === "pending" ? "active" : ""}
    onClick={() => setFilter("pending")}
  >
    Pending
  </button>

</div>
</div>
        <div className="glass-card">

          <div className="stats">
            <div>
              <h3>{tasks.length}</h3>
              <span>Total Tasks</span>
            </div>

            <div>
              <h3>
                {tasks.filter(task => task.completed).length}
              </h3>
              <span>Completed</span>
            </div>

            <div>
              <h3>
                {tasks.filter(task => !task.completed).length}
              </h3>
              <span>Pending</span>
            </div>
          </div>

          <TaskForm fetchTasks={fetchTasks} />
         <TaskList
  tasks={filteredTasks}
  toggleTask={toggleTask}
  deleteTask={deleteTask}
/>

        </div>
      </div>
    </>
  );
}

export default Home;