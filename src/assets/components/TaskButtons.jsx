import editIcon from "../images/edit.svg";
import shareIcon from "../images/share.svg";
import EditTask from "./EditTask";
import ShareTask from "./ShareTask";

export default function TaskButtons({ setAlert, index }) {
  function showEditMenu() {
    setAlert(<EditTask setAlert={setAlert} index={index} />);
  }

  function showShareMenu() {
    setAlert(<ShareTask setAlert={setAlert} />);
  }

  return (
    <div>
      <button
        id="editButton"
        onClick={showEditMenu}
      >
        <img src={editIcon} alt="" />
      </button>

      <button>i</button>

      <button
        id="shareButton"
        onClick={showShareMenu}
      >
        <img src={shareIcon} alt="" />
      </button>
    </div>
  );
}