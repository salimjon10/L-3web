import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/taskActions";

export default function CreateTask() {
  const dispatch = useDispatch();

  const inputTitleRef = useRef(null);
  const inputBodyRef = useRef(null);

  useEffect(() => {
    inputTitleRef.current.focus();
  }, []);

  function handleAddTask() {
    const title = inputTitleRef.current.value.trim();
    const body = inputBodyRef.current.value.trim();

    if (title !== "" && body !== "") {
      dispatch(addTask(title, body));
    }
  }

  return (
    <div>
      <div>
        <input
          ref={inputTitleRef}
          id="title_tasks_input"
          type="text"
          placeholder="Title..."
        />
        <input
          ref={inputBodyRef}
          id="body_tasks_input"
          type="text"
          placeholder="About..."
        />
      </div>
      <button onClick={handleAddTask}>
        +
      </button>
    </div>
  );
}
