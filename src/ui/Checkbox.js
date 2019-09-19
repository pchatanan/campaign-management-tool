import React from 'react'
import { Label } from '.';

const Checkbox = ({ label, checked, onChange }) => {
  return <Label>
    <input type='checkbox' checked={checked} onChange={e => { onChange(e.target.checked) }} />
    {label}
  </Label>
}

export default Checkbox