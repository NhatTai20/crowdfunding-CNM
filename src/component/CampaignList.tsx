import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { campaigns } from '../data/campagin'

function CampaignList() {
  return (
    <main>
    <div>CampaignList</div>
    <Link to='new'>Create a new campaign</Link>
    <div style={{display: 'flex'}}>
      <nav style={{padding: "1rem", borderRight: "1px solid"}}>
        {campaigns.map(campaign => (
          <Link to={`${campaign.id}`} key={campaign.id} style={{display: 'block', margin: '1rem'}}>{campaign.name}</Link>
        ))}
      </nav>
      <Outlet/>
    </div>
    </main>
  )
}

export default CampaignList