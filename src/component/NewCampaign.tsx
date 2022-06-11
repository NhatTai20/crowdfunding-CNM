import React from 'react'

function NewCampaign() {
  return (
    <form style={{padding: '1rem'}}>
        <label htmlFor="new-campaign" style={{display: 'block'}}>New campaign name</label>
        <input type="text" name="new-campaign" id="new-campaign" />
        <input type="submit" value="Create a new campaign"/>
    </form>
  )
}

export default NewCampaign