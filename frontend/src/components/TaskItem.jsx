function TaskItem({
  task,
  toggleTask,
  deleteTask
}) {

  return (
    <div
      className={
        task.completed
          ? "task-card completed"
          : "task-card"
      }
    >

      <span>
        {task.title}
      </span>

      <div className="task-actions">

        <button
          onClick={() =>
            toggleTask(
              task._id,
              task.completed
            )
          }
        >
          ✓
        </button>

        <button
          onClick={() =>
            deleteTask(task._id)
          }
        >
          🗑
        </button>

      </div>

    </div>
  );
}

export default TaskItem;