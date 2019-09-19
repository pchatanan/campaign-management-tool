import React from 'react'
import withDialog from '../common/withDialog';
import TextInput from '../ui/TextInput';
import Dropdown from '../ui/Dropdown';
import { Button, Label, SampleName } from '../ui';
import { useDispatch } from 'react-redux'
import { addItem, AD_LEVELS } from '../redux/actions';
import { getDateString } from '../common/utils';
import Checkbox from '../ui/Checkbox';
import useCountry from '../custom-hooks/useCountry';
import useGameName from '../custom-hooks/useGameName';

const CAMPAIGN_OBJECTIVES = [
  {
    label: 'Mobile App Installs',
    value: 'App Installs',
    abbr: 'MAIA'
  },
  {
    label: 'Mobile App Engagement',
    value: 'App Engagement',
    abbr: 'MAEA'
  },
  {
    label: 'Traffic',
    value: 'Traffic',
    abbr: 'TRAF'
  },
  {
    label: 'Lead Generation',
    value: 'Lead Generation',
    abbr: 'LEAD'
  },
  {
    label: 'Conversions',
    value: 'Conversions',
    abbr: 'CONV'
  }
]

const CreateNewCampaignDialog = props => {
  const dispatch = useDispatch()
  const country = useCountry()
  const gameName = useGameName()
  // default
  const status = 'PAUSED'
  const buyingType = 'AUCTION'
  const bidStrategy = 'Lowest Cost'
  const [nickname, setNickname] = React.useState('')
  const [objective, setObjective] = React.useState(CAMPAIGN_OBJECTIVES[0].value)
  const [iosLifetimeBudget, setIosLifetimeBudget] = React.useState('')
  const [andLifetimeBudget, setAndLifetimeBudget] = React.useState('')
  const [isAND, setIsAND] = React.useState(false)
  const [isIOS, setIsIOS] = React.useState(false)
  const suffix = CAMPAIGN_OBJECTIVES.find(x => x.value === objective).abbr
  const dateString = getDateString()
  return <div>
    <Label>Sample campaign name</Label>
    <SampleName>
      {`[AND/IOS]${nickname}_${country}_${dateString}_${suffix}_${gameName}`}
    </SampleName>
    <TextInput label='Campaign Nickname' value={nickname} onChange={setNickname} />
    <Dropdown label='Campaign Objective' value={objective} onChange={setObjective} options={CAMPAIGN_OBJECTIVES} />
    <Checkbox label='Target Android' checked={isAND} onChange={setIsAND} />
    {isAND && <TextInput label='Android Campaign Lifetime Budget' value={andLifetimeBudget} onChange={setAndLifetimeBudget} />}
    <Checkbox label='Target iOS' checked={isIOS} onChange={setIsIOS} />
    {isIOS && <TextInput label='iOS Campaign Lifetime Budget' value={iosLifetimeBudget} onChange={setIosLifetimeBudget} />}
    <Button onClick={e => {
      const newCampaign = {
        name: `${nickname}_${country}_${dateString}_${suffix}_${gameName}`,
        status, buyingType, bidStrategy, objective, isAND, andLifetimeBudget, isIOS, iosLifetimeBudget
      }
      dispatch(addItem(AD_LEVELS.CAMPAIGN, newCampaign, true))
    }}>{'Add New Campaign'}</Button>
  </div>
}

export default withDialog(CreateNewCampaignDialog, 'New Campaign', 'Create New Campaign')