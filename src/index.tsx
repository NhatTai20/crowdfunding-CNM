import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./component/Home/Home";
// import CampaignDetail from "./component/CampaignDetail";
// import NewCampaign from "./component/NewCampaign";
// import CampaignList from "./component/CampaignList";
// import CampaignRequest from "./component/CampaignRequest";
import Login from "./component/Auth/Login";
import Page from "./component/LandingPage/Page";
import AllProjects from "./component/View/AllProjects";
import CreateProject from "./component/Create/CreateProject";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}>
          <Route path="campaigns" element={<CampaignList />}>
            <Route index element={<h2 style={{padding: '1rem'}}>Please select a compaign</h2>}/>
            <Route path=':campaignId' element={<CampaignRequest/>}/>
            <Route path="new" element={<NewCampaign />} />
          </Route>
        </Route> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Page/>}/>
        <Route path="/all" element={<AllProjects/>}/>
        <Route path="/create" element={<CreateProject/>}/>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
