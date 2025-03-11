import React, { useState, useRef } from "react";
import TaskButtons from "./TaskButtons";
import DeletAlert from "./DeletAlert";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../scripts/itemTypes";
import { connect } from "react-redux";
import * as actions from "../../actions/taskActions";

function Task({ index, moveCard, setAlert, title, bodyTask }) {
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.TASK,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      hover(item, monitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    }),
    [index, moveCard]
  );

  drag(drop(ref));

  const openDelMenu = () => {
    setAlert(<DeletAlert setAlert={setAlert} index={index} />);
  };

  return (
    <div ref={ref}>
      <div className="task">
        <div
          onClick={() => setButtonsVisible(!buttonsVisible)}
        >
          <div>{title}</div>
          <p>{bodyTask}</p>
        </div>
        <button onClick={openDelMenu}>
          X
        </button>
      </div>
      {buttonsVisible && (
        <TaskButtons setAlert={setAlert} index={index} />
      )}
    </div>
  );
}

const mapDispatchToProps = {
    setAlert: actions.setAlert,
};

export default connect(null, mapDispatchToProps)(Task);