import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { campaigns } from '../data/campagin';

const CampaignDetail = () => {
const params = useParams<{campaignId: string}>();
const navigate = useNavigate();
const campaign = campaigns.find(campaign => campaign.id.toString() === params.campaignId)

useEffect(() => {
    if(!campaign) navigate('..') 
}, [campaign])
  return (
    <h2 style={{padding: '1rem'}}>
        {campaign ?
            `Campaign #${campaign?.id} for ${campaign?.name}` : 'No campaign found'
        }
    </h2>
  )
}

export default CampaignDetail