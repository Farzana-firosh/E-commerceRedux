import "../Footer/footer.css";
import "../Footer/footer.css";
import Logoimage from "../Assets/images/logoimg.jpg";
import Fblogo from "../Assets/images/fbicon.png";
import Xlogo from "../Assets/images/xicon.png";
import Instalogo from "../Assets/images/instaicon.png";
import Youtubelogo from "../Assets/images/youtubeicon.png";
import Pintrestlogo from "../Assets/images/pintresticon.png";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer_wrapper">
      <div className="footer_container_1">
        <span style={{ color: "black" }}>Have some Questions? </span>

        <button
          onClick={() => navigate("/Contact")}
          type="button"
          className="btn btn-dark"
        >
          Contact Us
        </button>
      </div>

      <div className="footer_container_2">
        <div className="footersocialdiv">
          <div>{<img src={Fblogo} />}</div>
          <div>{<img src={Xlogo} />}</div>
          <div>{<img src={Instalogo} />}</div>
          <div>{<img src={Youtubelogo} />}</div>
          <div>{<img src={Pintrestlogo} />}</div>
        </div>
        <div className="footerdescription">
          <span>
            Pixary is your trusted destination for stylish, high-quality
            products across fashion, electronics, and lifestyle. We’re committed
            to delivering great value, fast shipping, and a seamless shopping
            experience you can count on.
          </span>
        </div>
        <div>{<img src={Logoimage} height={80} />}</div>
        <div>
          <span style={{ fontWeight: "bold" }}> India | ₹ </span>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default Footer;
