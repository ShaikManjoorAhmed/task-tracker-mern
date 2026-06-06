import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {

  if (tasks.length === 0) {
    return (
      <div className="empty">
        ✨ No tasks yet. Add your first goal.
      </div>
    );
  }
if (tasks.length === 0) {
  return (
    <div className="empty">
      ✨ No matching tasks found.
    </div>
  );
}
  return (
    <div className="task-list">

      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}

    </div>
  );
}

export default TaskList;