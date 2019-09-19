import React from 'react'
import useNewCampaigns from '../custom-hooks/useNewCampaigns';
import useExistingCampaigns from '../custom-hooks/useExistingCampaigns';
import styled from 'styled-components'
import DisplayNewCampaign from './DisplayNewCampaign';

const DisplayLabel = styled.label`
  font-size: 1em;
  display: block;
  font-weight: bold;
  color: black;
  margin: 0.4em;
`

const DisplaySummary = props => {
  const newCampaigns = useNewCampaigns()
  const existingCampaigns = useExistingCampaigns()
  return <div>
    {/* New Campaigns */}
    <DisplayLabel>New Campaigns</DisplayLabel>
    {newCampaigns.map((newCampaign, newCampaignIdx) => {
      return <DisplayNewCampaign newCampaign={newCampaign} key={newCampaignIdx} />
    })}
    {/* Existing Campaigns */}
    {/* <DisplayLabel>Existing Campaigns</DisplayLabel> */}
  </div>
}

export default DisplaySummary