import Banner1 from "../Banner/images/Banner2.jpg";
import Banner2 from "../Banner/images/Banner1.jpg";
import Banner3 from "../Banner/images/banner3.jpg";
import "../Banner/Bannerr.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "600px", overflow: "hidden" }}
      >
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100" data-bs-interval="10000">
            <img
              src={Banner1}
              className="d-block w-100  object-fit-cover"
              style={{ height: "600px", width: "100%" }}
              alt="..."
            />

            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5> */}
              <div className="banner_btn">
                {" "}
                <button
                  onClick={() => navigate("/SignUp")}
                  type="button"
                  className="btn btn-secondary"
                >
                  Sign in{" "}
                </button>
                <button
                  onClick={() => navigate("/Products")}
                  type="button"
                  className="btn btn-secondary"
                >
                  Shop Now{" "}
                </button>{" "}
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={Banner2}
              className="d-block w-100 "
              style={{ height: "600px", width: "100%", objectFit: "cover" }}
              alt="..."
            />

            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5> */}
              <div className="banner_btn">
                {" "}
                <button
                  onClick={() => navigate("/SignUp")}
                  type="button"
                  className="btn btn-secondary"
                >
                  Sign in{" "}
                </button>
                <button
                  onClick={() => navigate("/Products")}
                  type="button"
                  className="btn btn-secondary"
                >
                  Shop Now{" "}
                </button>{" "}
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={Banner3}
              className="d-block w-100 object-fit-cover "
              style={{ height: "600px", width: "100%" }}
              alt="..."
            />

            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5> */}
              <div className="banner_btn">
                {" "}
                <button
                  onClick={() => navigate("/SignUp")}
                  type="button"
                  className="btn btn-secondary"
                >
                  Sign in{" "}
                </button>
                <button
                  onClick={() => navigate("/Products")}
                  type="button"
                  className="btn btn-secondary"
                >
                  Shop Now{" "}
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
