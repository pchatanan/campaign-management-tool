import React from 'react'
import { Label } from '../ui';
import styled from 'styled-components'
import Toggle from './Toggle';

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #a70d0d;
  padding: 0.4em;
  border-radius: 0.4em;
  margin: 0.4em;
  color: white;
  font-weight: bold;
  align-items: center;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 0.4em;
`

const SetDefaultObject = props => {
  const { label, value, getName, getImgUrl, renderButton, defaultSelected, toggleClick } = props
  return <div>
    <Label>{label}</Label>
    {value && <PageContainer>
      <Img alt={`${getName(value)}_picture`} src={getImgUrl(value)} />
      {getName(value)}
    </PageContainer>}
    {renderButton()}
    <Toggle on={defaultSelected} onClick={toggleClick} />
  </div>
}

export default SetDefaultObject