import React from 'react'
import { videosUrl } from '../fb-api';
import DialogWithRequest from '../common/DialogWithRequest';
import styled from 'styled-components'
import useAccount from '../custom-hooks/useAccount';
import MediaPreview, { MEDIATYPES } from '../ui/MediaPreview';

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  vertical-align: middle;
  margin: 0.4em;
`

const headers = ['picture', 'title']

const customRender = {
  picture: item => {
    return <Img alt={item.name} src={item.picture} />
  }
}

const AdVideosDialog = props => {
  const { selectedVideo, onVideoSelected, title } = props
  const account = useAccount()
  const url = videosUrl(account.id, title)
  return <DialogWithRequest text='Select video' title='Video' initUrl={url} method='GET' headers={headers} itemSelected={item => {
    return selectedVideo && item.id === selectedVideo.id
  }} onItemClick={onVideoSelected} customRender={customRender} renderPreview={() => {
    return selectedVideo && <MediaPreview media={selectedVideo} mediaType={MEDIATYPES.VIDEO} />
  }} />
}

export default AdVideosDialog