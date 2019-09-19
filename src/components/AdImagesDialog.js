import React from 'react'
import { imagesUrl } from '../fb-api';
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

const headers = ['picture', 'name']

const customRender = {
  picture: item => {
    return <Img alt={item.name} src={item.url_128} />
  }
}

const AdImagesDialog = props => {
  const { selectedImage, onImageSelected, name } = props
  const account = useAccount()
  const url = imagesUrl(account.id, name)
  return <DialogWithRequest text='Select image' title='Image' initUrl={url} method='GET' headers={headers} itemSelected={item => {
    return selectedImage && item.id === selectedImage.id
  }} onItemClick={onImageSelected} customRender={customRender} renderPreview={() => {
    return selectedImage && <MediaPreview media={selectedImage} mediaType={MEDIATYPES.IMAGE} />
  }} />
}

export default AdImagesDialog