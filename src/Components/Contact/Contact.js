import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <form
        className="row g-3 shadow p-4 rounded bg-light"
        style={{ maxWidth: "700px", width: "100%" }}
      >
        <div>
          <h1>Contact Us </h1>
        </div>

        <div className="col-md-4">
          <label for="validationDefault01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            value=""
            required
          />
        </div>
        <div className="col-md-4">
          <label for="validationDefault02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            value=""
            required
          />
        </div>
        <div className="col-md-4">
          <label for="validationDefaultUsername" className="form-label">
            Shopping ID{" "}
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationDefault03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>
        <div className="col-md-3">
          <label for="validationDefault04" className="form-label">
            State
          </label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-3">
          <label for="validationDefault05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            required
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>

        <div class="input-group">
          <span class="input-group-text">Your FeedBack / Query </span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div className="col-12">
          <button
            onClick={() => navigate("/feedback")}
            className="btn btn-primary"
            type="submit"
            style={{ backgroundColor: "black" }}
          >
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
