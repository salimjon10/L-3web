import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../actions/taskActions";

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
    <div>
      <div>
        Delete this task?
        <div>
          <button id="choice_button_yes" onClick={handleDelete}>
            Yes
          </button>
          <button id="choice_button_no" onClick={closeAlert}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
