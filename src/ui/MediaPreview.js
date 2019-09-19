import React from 'react'
import styled from 'styled-components'

const MediaPreviewContainer = styled.div`
  margin: 0.6em;
`

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`

export const MEDIATYPES = {
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE'
}

const MediaPreview = ({ media, mediaType }) => {
  var alt, src
  switch (mediaType) {
    case MEDIATYPES.VIDEO:
      alt = media.title
      src = media.picture
      break
    case MEDIATYPES.IMAGE:
      alt = media.name
      src = media.url_128
      break
    default:
      break
  }
  return <MediaPreviewContainer>
    <Img alt={alt} src={src} />
    {alt}
  </MediaPreviewContainer>
}

export default MediaPreview