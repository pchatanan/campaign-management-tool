import React from 'react'
import withDialog from '../common/withDialog';
import TextInput from '../ui/TextInput';
import { Button, Label, SampleName } from '../ui';
import Toggle from './Toggle';
import SaveAudienceSection from './SaveAudienceSection';
import CreateAudienceSection from './CreateAudienceSection';
import { useDispatch } from 'react-redux'
import { addItem, AD_LEVELS } from '../redux/actions'

const CreateNewAdSetDialog = props => {

  const dispatch = useDispatch()

  // default
  const status = 'ACTIVE'
  const gender = '0'
  const [nickname, setNickname] = React.useState('')
  const [timeStart, setTimeStart] = React.useState('')
  const [timeStop, setTimeStop] = React.useState('')

  const [useSavedAudience, setUseSavedAudience] = React.useState(false)
  const [savedAudience, setSavedAudience] = React.useState()
  const [customAudiences, setCustomAudiences] = React.useState([])
  return <div>
    <Label>Sample ad set name</Label>
    <SampleName>
      {`[Campaign Name]_${nickname}`}
    </SampleName>
    <TextInput label='Ad Set Nickname (e.g. CA0001, PI0001, LL0001, etc.)' value={nickname} onChange={setNickname} />
    <TextInput label='Time Start (MM/DD/YYYY HH:MM)' value={timeStart} onChange={setTimeStart} />
    <TextInput label='Time Stop (MM/DD/YYYY HH:MM)' value={timeStop} onChange={setTimeStop} />
    <div>
      <Label>{'Audience'}</Label>
      <Toggle on={useSavedAudience} onClick={e => {
        setUseSavedAudience(!useSavedAudience)
      }} label='use saved audience' />
    </div>
    {useSavedAudience ? <SaveAudienceSection savedAudience={savedAudience} onAudienceSelected={setSavedAudience} /> :
      <CreateAudienceSection customAudiences={customAudiences} onChange={setCustomAudiences} />}

    <Button onClick={e => {
      var newAdSet = {
        name: `${nickname}`,
        status, gender, timeStart, timeStop, useSavedAudience, savedAudience, customAudiences
      }
      dispatch(addItem(AD_LEVELS.ADSET, newAdSet, true))
    }}>{'Add New Ad Set'}</Button>
  </div>
}

export default withDialog(CreateNewAdSetDialog, 'New Ad Set', 'Create New Ad Set')