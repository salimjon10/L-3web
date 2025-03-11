import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../actions/taskActions";

export default function EditTask({ setAlert, index }) {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks[index]);

  const inputTitleRef = useRef(null);
  const inputBodyRef = useRef(null);

  useEffect(() => {
    inputTitleRef.current.focus();
  }, []);

  function closeAlert() {
    setAlert();
  }

  function handleEditTask() {
    const title = inputTitleRef.current.value.trim();
    const body = inputBodyRef.current.value.trim();

    if (title !== "" && body !== "") {
      dispatch(editTask(index, title, body));
      setAlert();
    }
  }

  return (
    <div>
      <div>
        <input
          ref={inputTitleRef}
          id="edit_input_title_task"
          type="text"
          placeholder="Title..."
          defaultValue={task?.title || ""}
        />
        <textarea
          ref={inputBodyRef}
          id="edit_input_body_task"
          type="text"
          placeholder="About..."
          defaultValue={task?.bodyTask || ""}
        ></textarea>

        <div>
          <button
            id="edit_button_cancel"
            onClick={closeAlert}
          >
            Cancel
          </button>
          <button
            id="edit_button_save"
            onClick={handleEditTask}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}