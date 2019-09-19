import React from 'react'
import { pagesUrl } from '../fb-api';
import DialogWithRequest from '../common/DialogWithRequest';
import styled from 'styled-components'

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  vertical-align: middle;
  margin: 0.4em;
`

const headers = ['picture', 'name', 'username']

const customRender = {
  picture: item => {
    return <Img alt={item.name} src={item.picture.data.url} />
  }
}

const PagesDialog = props => {
  const { selectedPage, onPageSelected } = props
  const url = pagesUrl()
  return <DialogWithRequest text='Select Page' title='Pages' initUrl={url} method='GET' headers={headers} itemSelected={item => {
    return selectedPage && item.id === selectedPage.id
  }} onItemClick={onPageSelected} customRender={customRender} />
}

export default PagesDialog