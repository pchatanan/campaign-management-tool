import React from 'react'
import { igsUrl } from '../fb-api';
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

const headers = ['picture', 'username']

const customRender = {
  picture: item => {
    return <Img alt={`${item.username}_picture`} src={item.profile_pic} />
  }
}

const IgsDialog = props => {
  const { selectedIg, onIgSelected } = props
  const account = useAccount()
  const url = igsUrl(account.id)
  return <DialogWithRequest text='Select Ig' title='Pages' initUrl={url} method='GET' headers={headers} itemSelected={item => {
    return selectedIg && item.id === selectedIg.id
  }} onItemClick={onIgSelected} customRender={customRender} />
}

export default IgsDialog