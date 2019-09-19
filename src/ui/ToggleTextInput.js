import React from 'react'
import TextInput from './TextInput';
import Toggle from '../components/Toggle';
import styled from 'styled-components'

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TextInputContainer = styled.div`
  flex: 1
`

const ToggleTextInput = props => {
  const { label, value, onChange, on, onClick, toggleLabel } = props
  return <RowDiv>
    <TextInputContainer>
      <TextInput label={label} value={value} onChange={onChange} />
    </TextInputContainer>
    <Toggle on={on} onClick={onClick} label={toggleLabel} />
  </RowDiv>
}

export default ToggleTextInput