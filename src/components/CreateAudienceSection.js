import React from 'react'
import CustomAudiencesDialog from './CustomAudiencesDialog'
import { Label } from '../ui';

const CreateAudienceSection = props => {
  const { customAudiences, onChange } = props
  return <div>
    <Label>{'Custom Audiences'}</Label>
    {customAudiences.map((customAudience, customAudienceIdx) => {
      return <div key={customAudienceIdx}>
        {customAudience.name}
      </div>
    })}
    <CustomAudiencesDialog customAudiences={customAudiences} onChange={onChange} />
  </div>
}

export default CreateAudienceSection