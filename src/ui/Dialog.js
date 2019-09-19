import styled from 'styled-components'

export const DialogHeader = styled.div`
  color: #0d1867;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0.6em;
`

export const DialogCard = styled.div`
  background: ${props => props.selected ? '#543e3e' : '#e5dece'};
  color: ${props => props.selected ? 'white' : 'black'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  border-radius: 0.3em;
  padding: 0.6em;
  margin: 0.6em;
  cursor: pointer;
`


export const DimBackground = styled.div`
    visibility: ${props => props.show ? 'visible' : 'hidden'}
    opacity: ${props => props.show ? '1' : '0'}
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.4);
    z-index: 10;
    transition: visibility 0.2s ease,opacity 0.2s ease;
`

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10vh auto;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  background: white;
  border-radius: 0.5em;
  box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.4);
`

export const ContentContainer = styled.div`
  overflow: auto;
  flex: 1;
`