import React from 'react'
import { Label, Input } from '.';

const TextInput = props => {
  const { label, onChange, ...otherProps } = props
  return <Label>
    {label}
    <Input {...otherProps} onChange={e => { onChange(e.target.value) }} />
  </Label>
}

export default TextInput