import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateProject.scss"
function CreateProject() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    duration: null,
    amountGoal: null,
  });
  const create = async (e: any) => {};
  return (
    <div className="create-container">
      <Link to="/all" className="backto-home">
        Back to home
      </Link>
      <div className="split-container">
        <div className="form-container">
          <form onSubmit={create}>
            <h2 className="heading">Create Project</h2>
            <div className="ip-fields">
              <input
                placeholder="Title"
                value={project.title}
                onChange={(e) =>
                  setProject({ ...project, title: e.target.value })
                }
              />

              <input placeholder="Duration (days)" />
            </div>

            <div className="ip-fields">
              <input placeholder="Goal Amount (ETH)" />

              <textarea placeholder="Description" />
            </div>

            <button>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
