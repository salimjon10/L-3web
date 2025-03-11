import shareCopy from "../assets/images/copy.svg";
import shareVK from "../assets/images/vk.svg";
import shareTG from "../assets/images/telegram.svg";
import shareWhatsapp from "../assets/images/whats.svg";
import shareFacebook from "../assets/images/whats.svg";

export default function ShareTask({ setAlert }) {
  function closeAlert() {
    setAlert();
  }

  return (
    <div className="modal hidden" onClick={closeAlert}>
      <div className="edit_modal_content">
        <div className="share_buttons">
          <button>
            <img src={shareCopy} alt="" />
          </button>

          <button>
            <img src={shareVK} alt="" />
          </button>

          <button>
            <img src={shareTG} alt="" />
          </button>

          <button>
            <img src={shareWhatsapp} alt="" />
          </button>

          <button>
            <img src={shareFacebook} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
