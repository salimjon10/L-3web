import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../actions/taskActions";

export default function DeletAlert({ setAlert, index }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTask(index));
    setAlert();
  }

  function closeAlert() {
    setAlert();
  }

  return (
    <div className="modal hidden">
      <div className="modal_content">
        Delete this task?
        <div className="modal_buttons">
          <button id="choice_button_yes" className="confirm_button" onClick={handleDelete}>
            Yes
          </button>
          <button id="choice_button_no" className="cancel_button" onClick={closeAlert}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
