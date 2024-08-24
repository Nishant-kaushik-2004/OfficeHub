import { LiaClipboardSolid } from "react-icons/lia";

function AddProjects() {
  return (
    <div className="add-options">
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#clientModal"
      >
        Add Project <LiaClipboardSolid />
      </button>

      <div
        className="modal fade"
        id="clientModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Project Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card card-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputName4" className="form-label">
                      Name
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="inputName4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputDescription4" className="form-label">
                      Description
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputDescription4"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputDeadline" className="form-label">
                      Deadline
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputDeadline"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputClientName" className="form-label">
                      Client name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputClientName"
                      placeholder="input client name"
                    />
                  </div>
                  <div className="col-12 lid">
                    <label htmlFor="selectLead" className="form-label">
                      Select Lead :
                    </label>
                    <div className="lead-dropdown">
                      <select>
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="option1">option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProjects;
