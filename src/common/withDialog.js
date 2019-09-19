import React from 'react'
import { Button } from '../ui';
import { DialogHeader, DimBackground, DialogContainer, ContentContainer } from '../ui/Dialog';

const withDialog = (Component, text, title) => props => {
  const [show, setShow] = React.useState(false)
  return <>
    <DimBackground show={show} onClick={e => { setShow(false) }}>
      <DialogContainer onClick={e => { e.stopPropagation() }}>
        <DialogHeader>{title}</DialogHeader>
        <ContentContainer>
          <Component {...props} />
        </ContentContainer>
      </DialogContainer>
    </DimBackground>
    <Button type='button' onClick={e => { setShow(true) }}>{text}</Button>
  </>
}

export default withDialog