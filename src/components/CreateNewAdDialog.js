import React from 'react'
import withDialog from '../common/withDialog';
import TextInput from '../ui/TextInput';
import AdImagesDialog from './AdImagesDialog';
import AdVideosDialog from './AdVideosDialog';
import { Button, SampleName, Label } from '../ui';
import { useDispatch } from 'react-redux'
import { addItem, AD_LEVELS } from '../redux/actions';

const MEDIA_TYPES = [
  {
    label: 'Image',
    value: 'image',
  },
  {
    label: 'Video',
    value: 'video'
  }
]

const CreateNewAdDialog = props => {
  const status = 'ACTIVE'
  const cta = 'APPLY_NOW'
  const dispatch = useDispatch()
  const [caption, setCaption] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [mediaSearch, setMediaSearch] = React.useState('')
  const [mediaType, setMediaType] = React.useState(MEDIA_TYPES[0].value)
  const [selectedImage, setSelectedImage] = React.useState()
  const [selectedVideo, setSelectedVideo] = React.useState()
  var nickname = ''
  var nicknameNoExt = ''
  if (mediaType === 'image' && selectedImage) {
    nickname = selectedImage.name
  }
  if (mediaType === 'video' && selectedVideo) {
    nickname = selectedVideo.title
  }
  if (nickname.length > 0) {
    nicknameNoExt = nickname.split('.').slice(0, -1).join('.')
  }
  return <div>
    <Label>Sample ad name</Label>
    <SampleName>
      {`[Ad Set Name]_${nicknameNoExt}`}
    </SampleName>
    <TextInput label='Ad Caption' value={caption} onChange={setCaption} />
    <TextInput label='Ad Title' value={title} onChange={setTitle} />
    <TextInput label='Ad Description' value={description} onChange={setDescription} />
    {MEDIA_TYPES.map((media_type, media_typeIdx) => {
      return <label key={media_typeIdx}>
        <input type='radio' value={mediaType} checked={media_type.value === mediaType} onChange={e => {
          setMediaType(media_type.value)
        }} />
        {media_type.label}
      </label>
    })}
    <TextInput label='Media search' value={mediaSearch} onChange={setMediaSearch} />
    <div>
      {mediaType === 'image' && <AdImagesDialog selectedImage={selectedImage} onImageSelected={setSelectedImage} name={mediaSearch} />}
      {mediaType === 'video' && <AdVideosDialog selectedVideo={selectedVideo} onVideoSelected={setSelectedVideo} title={mediaSearch} />}
    </div>
    <Button onClick={e => {
      var newAd = {
        name: `${nicknameNoExt}`,
        status, mediaType, selectedImage, selectedVideo, cta, caption, title, description
      }
      dispatch(addItem(AD_LEVELS.AD, newAd, true))
    }}>{'Add New Ad Set'}</Button>
  </div>
}

export default withDialog(CreateNewAdDialog, 'New Ad', 'Create New Ad')