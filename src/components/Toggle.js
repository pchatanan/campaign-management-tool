import React from 'react'
import styled from 'styled-components'

const ToggleContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  margin: 0.4em;
`

const ToggleBackground = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  height: 2em;
  width: 3em;
  border-radius: 1em;
  background: ${props => props.on ? '#5b75f9' : 'white'};
  box-shadow: inset 0px 0px 0.5em 0px rgba(0,0,0,0.2);
  padding: 0.3em;
  box-sizing: border-box;
  transition: background ease 0.05s;
`

const ToggleBody = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.on ? '1.3em' : '0.3em'};
  transform: translate(0,-50%);
  height: 1.4em;
  border-radius: 0.7em;
  width: 1.4em;
  background: white;
  box-shadow: 0px 0px 0.5em 0px rgba(0,0,0,0.2);
  transition: left ease 0.05s;
`

const Label = styled.label`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.4em;
  color: ${props => props.on ? '#5b75f9' : 'grey'};
  transition: color ease 0.05s;
  cursor: pointer;
`

const Toggle = props => {
  const { on, onClick, label } = props
  return <ToggleContainer onClick={onClick}>
    <ToggleBackground on={on}>
      <ToggleBody on={on} />
    </ToggleBackground>
    <Label on={on}>{label || 'set as default'}</Label>
  </ToggleContainer>
}

export default Toggle