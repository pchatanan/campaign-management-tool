import React from 'react'
import styled from 'styled-components'

const LabelValueContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0.4em;
  box-sizing: border-box;
  padding: 0.5em;
  border-radius: 0.5em;
  background: WhiteSmoke;
`

const Label = styled.div`
  display: inline-block;
  vertical-align: middle;
  color: black;
  padding: 0.4em;
`

const Span = styled.div`
  display: inline-block;
  vertical-align: middle;
  color: white;
  font-weight: bold;
  padding: 0.4em;
  border-radius: 0.2em;
  background: #a70d0d;
  width: fit-content;
`

const LabelValuePair = props => {
  const { label, value } = props
  return <LabelValueContainer>
    <Label>{label}</Label>
    <Span>{value}</Span>
  </LabelValueContainer>
}

export default LabelValuePair