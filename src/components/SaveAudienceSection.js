import React from 'react'
import { Label } from '../ui';
import SavedAudiencesDialog from './SavedAudiencesDialog';
import LabelValuePair from './LabelValuePair';
import { checkNested } from '../common/utils';

const SaveAudienceSection = props => {
  const { savedAudience, onAudienceSelected } = props
  const name = checkNested(savedAudience, 'name')
  const ageMin = checkNested(savedAudience, 'targeting', 'age_min')
  const ageMan = checkNested(savedAudience, 'targeting', 'age_max')
  const countries = checkNested(savedAudience, 'targeting', 'geo_locations', 'countries')
  return <div>
    <Label>{'Saved Audience'}</Label>
    {savedAudience && <div>
      <LabelValuePair label='Name' value={name} />
      <LabelValuePair label='Age min' value={ageMin} />
      <LabelValuePair label='Age max' value={ageMan} />
      {countries && <LabelValuePair label='Countries' value={countries.join(', ')} />}
    </div>}
    <SavedAudiencesDialog audience={savedAudience} onAudienceSelected={onAudienceSelected} />
  </div>
}

export default SaveAudienceSection