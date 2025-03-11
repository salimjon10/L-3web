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
    <div className="modal hidden">
      <div className="edit_modal_content">
        <div className="text_container">
          <input
            ref={inputTitleRef}
            id="edit_input_title_task"
            className="input mini_input mb-12"
            type="text"
            placeholder="Title..."
            defaultValue={task?.title || ""}
          />
          <textarea
            ref={inputBodyRef}
            id="edit_input_body_task"
            className="textarea max_input"
            type="text"
            placeholder="About..."
            defaultValue={task?.bodyTask || ""}
          ></textarea>
        </div>

        <div className="edit_modal_buttons">
          <button id="edit_button_cancel" className="cancel_button" onClick={closeAlert}>
            Cancel
          </button>
          <button id="edit_button_save" className="save_button" onClick={handleEditTask}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
