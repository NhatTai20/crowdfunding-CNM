import React, { useState } from "react";
import Header from "../header/Header";
import RightSideBar from "../sidebars/RightSideBar";
import Project from "./Project";
import Grid from "@mui/material/Grid";
import "./style.css";
function AllProjects() {
  const [funding, setFunding] = useState(0);
  return (
    <div className="main-container">
      <div className="tri-div-view">
        <div className="mid-container">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8} lg={9}>
              <div className="project-card">
                <div className="top-tile">
                  <h3>ABC</h3>
                  <div className="funded">
                    <img
                      className="ethIcon"
                      src="https://img.icons8.com/fluent/48/000000/ethereum.png"
                    />
                    <p>100 ETH</p>
                  </div>
                </div>

                <p id="desc">this is the project descreption</p>
                <p id="deadline">Will be closed on: 10/10/2022</p>
                <p id="raised">
                  Amount to be raised:
                  <span>
                    <img
                      className="ethIcon"
                      src="https://img.icons8.com/fluent/48/000000/ethereum.png"
                    />
                    100 ETH
                  </span>
                </p>
                <div className={`fund-options ${funding !== 0 ? "flex" : ""}`}>
                  <button>Fund</button>
                  {funding !== 0 && <button>Refund</button>}
                </div>
              </div>
              <div className="project-card">
                <div className="top-tile">
                  <h3>ABC</h3>
                  <div className="funded">
                    <img
                      className="ethIcon"
                      src="https://img.icons8.com/fluent/48/000000/ethereum.png"
                    />
                    <p>100 ETH</p>
                  </div>
                </div>

                <p id="desc">this is the project descreption</p>
                <p id="deadline">Will be closed on: 10/10/2022</p>
                <p id="raised">
                  Amount to be raised:
                  <span>
                    <img
                      className="ethIcon"
                      src="https://img.icons8.com/fluent/48/000000/ethereum.png"
                    />
                    100 ETH
                  </span>
                </p>
                <div className={`fund-options ${funding !== 0 ? "flex" : ""}`}>
                  <button>Fund</button>
                  {funding !== 0 && <button>Refund</button>}
                </div>
              </div>
              <div className="project-card">
                <div className="top-tile">
                  <h3>ABC</h3>
                  <div className="funded">
                    <img
                      className="ethIcon"
                      src="https://img.icons8.com/fluent/48/000000/ethereum.png"
                    />
                    <p>100 ETH</p>
                  </div>
                </div>

                <p id="desc">this is the project descreption</p>
                <p id="deadline">Will be closed on: 10/10/2022</p>
                <p id="raised">
                  Amount to be raised:
                  <span>
                    <img
                      className="ethIcon"
                      src="https://img.icons8.com/fluent/48/000000/ethereum.png"
                    />
                    100 ETH
                  </span>
                </p>
                <div className={`fund-options ${funding !== 0 ? "flex" : ""}`}>
                  <button>Fund</button>
                  {funding !== 0 && <button>Refund</button>}
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <RightSideBar />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
