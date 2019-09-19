import React from 'react'
import { customAudiencesUrl } from '../fb-api';
import DialogWithRequest from '../common/DialogWithRequest';
import useAccount from '../custom-hooks/useAccount';
import _ from 'lodash/lang'

const headers = ['name', 'subtype']

const CustomAudiencesDialog = props => {
  const { customAudiences, onChange } = props
  const account = useAccount()
  const url = customAudiencesUrl(account.id)
  return <DialogWithRequest text='Select Custom Audience' title='Custom Audiences' initUrl={url} method='GET' headers={headers} itemSelected={item => {
    const foundIndex = customAudiences.findIndex(ca => {
      return ca.id === item.id
    })
    return foundIndex > -1
  }} onItemClick={item => {
    const foundIndex = customAudiences.findIndex(ca => {
      return ca.id === item.id
    })
    const clonedCustomAudiences = _.cloneDeep(customAudiences)
    if (foundIndex > -1) {
      clonedCustomAudiences.splice(foundIndex, 1)
      onChange(clonedCustomAudiences)
    }
    else {
      onChange([...clonedCustomAudiences, item])
    }
  }} />
}

export default CustomAudiencesDialog