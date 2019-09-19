import React from 'react'
import { savedAudiencesUrl } from '../fb-api';
import DialogWithRequest from '../common/DialogWithRequest';
import useAccount from '../custom-hooks/useAccount';

const headers = ['name']

const SavedAudiencesDialog = props => {
  const { audience, onAudienceSelected } = props
  const account = useAccount()
  const url = savedAudiencesUrl(account.id)
  return <DialogWithRequest text='Select Saved Audience' title='Saved Audiences' initUrl={url} method='GET' headers={headers} itemSelected={item => {
    return audience && item.id === audience.id
  }} onItemClick={onAudienceSelected} />
}

export default SavedAudiencesDialog