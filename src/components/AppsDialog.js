import React from 'react'
import { appsUrl } from '../fb-api';
import DialogWithRequest from '../common/DialogWithRequest';
import styled from 'styled-components'
import useAccount from '../custom-hooks/useAccount';

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  vertical-align: middle;
  margin: 0.4em;
`

const headers = ['picture', 'name']

const customRender = {
  picture: item => {
    return <Img alt={`${item.name}_picture`} src={item.logo_url} />
  }
}

const AppsDialog = props => {
  const { selectedApp, onAppSelected } = props
  const account = useAccount()
  const url = appsUrl(account.id)
  return <DialogWithRequest text='Select App' title='Pages' initUrl={url} method='GET' headers={headers} itemSelected={item => {
    return selectedApp && item.id === selectedApp.id
  }} onItemClick={onAppSelected} customRender={customRender} />
}

export default AppsDialog