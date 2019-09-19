import React from 'react'
import { adAccountsUrl } from '../fb-api';
import { setAccount } from '../redux/actions';
import DialogWithRequest from '../common/DialogWithRequest';
import useAccount from '../custom-hooks/useAccount';
import { useDispatch } from 'react-redux'

const headers = ['name']

const AdAccountsDialog = props => {
  const url = adAccountsUrl()
  const account = useAccount()
  const dispatch = useDispatch()
  return <DialogWithRequest text='Select Ad Account' title='Ad Accounts' initUrl={url} method='GET' headers={headers} itemSelected={item => {
    return account && item.id === account.id
  }} onItemClick={item => {
    dispatch(setAccount(item))
  }} />
}

export default AdAccountsDialog