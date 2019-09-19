import React from 'react'
import { Label, Select } from '.';

const Dropdown = props => {
  const { label, options, onChange, ...otherProps } = props
  return <>
    <Label>
      {label}
      <Select {...otherProps} onChange={e => { onChange(e.target.value) }}>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </Select>
    </Label>
  </>
}

export default Dropdown