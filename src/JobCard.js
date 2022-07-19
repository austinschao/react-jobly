import JoblyApi from "./api";
import UserContext from "./UserContext";
import { useContext, useState } from "react";

/** Renders JobCard */
function JobCard({ job }) {
  const { currentUser } = useContext(UserContext);
  const [applied, setApplied] = useState(currentUser.applications.includes(job.id));

  /** Handles applying to a job */
  async function applyToJob() {
    const resp = await JoblyApi.applyToJob({ username: currentUser.username, jobId: job.id });
    if (resp) setApplied(true);
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="card mb-3 col-6">
          <h6>{job.title}</h6>
          <p>{job.companyName}</p>
          <div>
            <small>
              Salary: {job.salary || ""}
            </small>
          </div>
          <div>
            <small>
              Equity: {job.equity || ""}
            </small>
          </div>
          <div className="float-end p-1">
            {applied ?
              <button className="btn btn-danger disabled" aria-disabled="true" data-bs-toggle="button">Applied</button> :
              <button className="btn btn-success" onClick={applyToJob}>
                Apply
              </button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;