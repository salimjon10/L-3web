import React from "react";
import Task from "./Task";
import ZeroTasks from "./ZeroTasks";
import { useSelector, useDispatch } from "react-redux";
import { moveTask } from "../actions/taskActions";

function TaskList({ setAlert }) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const moveCard = (dragIndex, hoverIndex) => {
    dispatch(moveTask(dragIndex, hoverIndex));
  };

  if (tasks.length === 0) {
    return <ZeroTasks />;
  } else {
    const taskListResult = tasks.map((task, index) => (
      <Task
        key={`${task.title}-${index}-${task.bodyTask}`}
        index={index}
        moveCard={moveCard}
        setAlert={setAlert}
        title={task.title}
        bodyTask={task.bodyTask}
      />
    ));
    return <div className="task_section">{taskListResult}</div>;
  }
}

export default TaskList;