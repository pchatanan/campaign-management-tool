import React from 'react'
import { adCampaignsUrl } from '../fb-api'
import { addItem, AD_LEVELS, removeItem } from '../redux/actions'
import DialogWithRequest from '../common/DialogWithRequest';
import useAccount from '../custom-hooks/useAccount';
import useExistingCampaigns from '../custom-hooks/useExistingCampaigns';
import { useDispatch } from 'react-redux'

const headers = ['name', 'objective']

const AdCampaignsDialog = props => {
  const dispatch = useDispatch()
  const account = useAccount()
  const url = adCampaignsUrl(account.id)
  const existingCampaigns = useExistingCampaigns()
  return <DialogWithRequest text='Select Existing Campaign' title='Existing Campaigns' initUrl={url} method='GET' headers={headers} itemSelected={item => {
    const foundIndex = existingCampaigns.findIndex(campaign => {
      return campaign.id === item.id
    })
    return foundIndex > -1
  }} onItemClick={item => {
    const foundIndex = existingCampaigns.findIndex(campaign => {
      return campaign.id === item.id
    })
    if (foundIndex > -1) {
      dispatch(removeItem(AD_LEVELS.CAMPAIGN, foundIndex, false))
    }
    else {
      dispatch(addItem(AD_LEVELS.CAMPAIGN, item, false))
    }
  }} />
}

export default AdCampaignsDialog