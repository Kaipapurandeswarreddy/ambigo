import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginTop: "80px" } as any}> </div>
      <div className="careerhead">
        <div className="careerheadleft">
          <h1>
            Join our Team At
            <br />
            <span>Ambigo</span>
          </h1>
          <p>
            India's pioneering GPS-based technology platform designed to provide
            fast and reliable first-point medical attention.
          </p>
        </div>
        <div className="careerheadright">
          <img src="https://media.istockphoto.com/id/1154816287/photo/paramedic-team-pushing-stretcher.webp?a=1&amp;b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=LjTe2ytB1aJ_01wh1gISFS4ejR7cc1eIMiL3w7OGjlo=" />
        </div>
      </div>
      <div className="career-container">
        <div className="career-box">
          <h1 className="career-title">Join Ambigo - Save Lives</h1>
          <p className="career-description">
            At Ambigo, we are committed to providing top-notch emergency medical
            services. Join us in making a difference.
          </p>
          <div className="job-list">

            <div className="job-card">
              <h2 className="job-title">Hospital Coordinator</h2>
              <p className="job-description">
                Manage hospital communications and patient records.
              </p>
              <p className="job-location">Location: Main Branch</p>
              <button
                className="apply-button"
                onClick={() => navigate("/hospitalCoordinatorForm")}
              >
                Apply Now
              </button>
            </div>
            <div className="job-card">
              <h2 className="job-title">Emergency Staff</h2>
              <p className="job-description">
                Provide emergency care and support.
              </p>
              <p className="job-location">Location: Citywide</p>
              <button
                className="apply-button"
                onClick={() => navigate("/emergencyStaffForm")}
              >
                Apply Now
              </button>
            </div>
            <div className="job-card">
              <h2 className="job-title">Paramedical Trainer</h2>
              <p className="job-description">
                Train paramedics for emergency response.
              </p>
              <p className="job-location">Location: Training Center</p>
              <button
                className="apply-button"
                onClick={() => navigate("/paramedicalTrainerForm")}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
