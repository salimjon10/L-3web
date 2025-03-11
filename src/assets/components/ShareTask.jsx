import shareCopy from "../images/copy.svg";
import shareVK from "../images/vk.svg";
import shareTG from "../images/telegram.svg";
import shareWhatsapp from "../images/whats.svg";
import shareFacebook from "../images/whats.svg";

export default function ShareTask({ setAlert }) {
  function closeAlert() {
    setAlert();
  }

  return (
    <div onClick={closeAlert}>
      <div>
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
  );
}
