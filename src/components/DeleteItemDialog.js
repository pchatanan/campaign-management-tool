import React from 'react'
import withDialog from "../common/withDialog";
import Dropdown from '../ui/Dropdown';
import useNewCampaigns from '../custom-hooks/useNewCampaigns';
import useNewAdSets from '../custom-hooks/useNewAdSets';
import useNewAds from '../custom-hooks/useNewAds';
import { Button } from '../ui';
import { useDispatch } from 'react-redux'
import { removeItem, AD_LEVELS } from '../redux/actions';

const ADLEVELS = [
  {
    label: 'New Campaign',
    value: 'new_campaign'
  },
  {
    label: 'New Ad Set',
    value: 'new_adset'
  },
  {
    label: 'New Ad',
    value: 'new_ad'
  }
]

const DeleteItemDialog = props => {
  const [selectedAdLevel, setSelectedAdLevel] = React.useState(ADLEVELS[0].value)
  const [newCampaignIndex, setNewCampaignIndex] = React.useState(0)
  const [newAdSetIndex, setNewAdSetIndex] = React.useState(0)
  const [newAdIndex, setNewAdIndex] = React.useState(0)
  const newCampaigns = useNewCampaigns()
  const newAdSets = useNewAdSets()
  const newAds = useNewAds()
  const dispatch = useDispatch()
  return <div>
    <Dropdown label='Select Ad Level' value={selectedAdLevel} onChange={setSelectedAdLevel} options={ADLEVELS} />
    {selectedAdLevel === 'new_campaign' && newCampaigns.length > 0 &&
      <Dropdown label='New Campaign' value={newCampaignIndex} onChange={setNewCampaignIndex} options={newCampaigns.map((newCampaign, idx) => {
        return {
          value: idx,
          label: newCampaign.name
        }
      })} />}
    {selectedAdLevel === 'new_adset' && newAdSets.length > 0 &&
      <Dropdown label='New Ad Set' value={newAdSetIndex} onChange={setNewAdSetIndex} options={newAdSets.map((newAdSet, idx) => {
        return {
          value: idx,
          label: newAdSet.name
        }
      })} />}
    {selectedAdLevel === 'new_ad' && newAds.length > 0 &&
      <Dropdown label='New Ad' value={newAdIndex} onChange={setNewAdIndex} options={newAds.map((newAd, idx) => {
        return {
          value: idx,
          label: newAd.name
        }
      })} />}
    <Button onClick={e => {
      var adLevel
      var selectedIndex
      switch (selectedAdLevel) {
        case 'new_campaign':
          adLevel = AD_LEVELS.CAMPAIGN
          selectedIndex = newCampaignIndex
          break
        case 'new_adset':
          adLevel = AD_LEVELS.ADSET
          selectedIndex = newAdSetIndex
          break
        case 'new_ad':
          adLevel = AD_LEVELS.AD
          selectedIndex = newAdIndex
          break
        default:
          break
      }
      dispatch(removeItem(adLevel, selectedIndex, true))
    }}>{'Delete Selected'}</Button>
  </div>
}

export default withDialog(DeleteItemDialog, 'Delete item', 'Select which item to be deleted')