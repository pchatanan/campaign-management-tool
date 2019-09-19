import React from 'react'
import styled from 'styled-components'
import useNewAdSets from '../custom-hooks/useNewAdSets';
import useNewAds from '../custom-hooks/useNewAds';

const CampaignContainer = styled.div`
  margin: 0.4em;
  padding: 0.4em;
  border-radius: 0.2em;
  background: #5b75f9;
  color: white;
`

const AdSetContainer = styled.div`
  margin: 0.4em;
  padding: 0.4em;
  border-radius: 0.2em;
  background: #91a3fb;
  color: white;
`

const AdContainer = styled.div`
  margin: 0.4em;
  padding: 0.4em;
  border-radius: 0.2em;
  background: #c8d1fd;
  color: white;
`

const DisplayNewCampaign = ({ newCampaign }) => {
  const newAdSets = useNewAdSets()
  const newAds = useNewAds()
  return <>
    {newCampaign.isAND && <CampaignContainer>
      {`AND${newCampaign.name}`}
      {newAdSets.map((newAdSet, newAdSetIdx) => {
        return <AdSetContainer key={newAdSetIdx}>
          {`AND${newCampaign.name}_${newAdSet.name}`}
          {newAds.map((newAd, newAdIdx) => {
            return <AdContainer key={newAdIdx}>
              {`AND${newCampaign.name}_${newAdSet.name}_${newAd.name}`}
            </AdContainer>
          })}
        </AdSetContainer>
      })}
    </CampaignContainer>}
    {newCampaign.isIOS && <CampaignContainer>
      {`IOS${newCampaign.name}`}
      {newAdSets.map((newAdSet, newAdSetIdx) => {
        return <AdSetContainer key={newAdSetIdx}>
          {`IOS${newCampaign.name}_${newAdSet.name}`}
          {newAds.map((newAd, newAdIdx) => {
            return <AdContainer key={newAdIdx}>
              {`IOS${newCampaign.name}_${newAdSet.name}_${newAd.name}`}
            </AdContainer>
          })}
        </AdSetContainer>
      })}
    </CampaignContainer>}
  </>
}

export default DisplayNewCampaign