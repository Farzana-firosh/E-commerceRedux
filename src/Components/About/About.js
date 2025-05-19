import About_Us from "../Assets/images/aboutus.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

import { faTruck } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  return (
    <>
      <div class="card text-bg-dark d-flex align-items-center position-relative">
        <img src={About_Us} class="card-img" alt="..." />
        <div
          class="card-img-overlay d-flex flex-column justify-content-center text-center"
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            padding: "2rem",
            borderRadius: "0.5rem",
          }}
        >
          <h1 class="text-dark">ABOUT US </h1>

          <h4 className=" text-dark" style={{ color: "black" }}>
            Welcome to Pixary– your one-stop destination for quality products
            and a smooth shopping experience! At Pixary, we believe shopping
            should be easy, enjoyable, and trustworthy. That’s why we’re here to
            offer a wide range of carefully selected products at prices you’ll
            love. Whether you're looking for the latest trends, daily
            essentials, or something special, we’ve got you covered.
          </h4>
          <div className="d-flex align-items-center justify-content-center gap-5">
            <div className="div2_2">
              <div className="icon-circle">
                {" "}
                <FontAwesomeIcon
                  icon={faTruck}
                  size="xl"
                  style={{ color: "#000000" }}
                />{" "}
              </div>

              <div className="icon_text" style={{ color: "black" }}>
                {" "}
                <h5> Free Shopping</h5>{" "}
              </div>
            </div>

            <div className="div2_2">
              <div className="icon-circle">
                {" "}
                <FontAwesomeIcon
                  icon={faCreditCard}
                  size="xl"
                  style={{ color: "#000000" }}
                />{" "}
              </div>

              <div className="icon_text" style={{ color: "black" }}>
                {" "}
                <h5> Flexible Payment</h5>{" "}
              </div>
            </div>

            <div className="div2_2">
              <div className="icon-circle">
                {" "}
                <FontAwesomeIcon
                  icon={faCoins}
                  style={{ color: "#000000" }}
                />{" "}
              </div>

              <div className="icon_text" style={{ color: "black" }}>
                {" "}
                <h5> Earn Points </h5>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
