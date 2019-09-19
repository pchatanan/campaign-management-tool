import React from 'react'
import { Button } from '../ui';
import { useFetch } from '../fb-api';
import { DialogHeader, DimBackground, DialogContainer, ContentContainer } from '../ui/Dialog';
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.4em;
  padding: 0.4em;
`

export const DialogCard = styled.tr`
  background: ${props => props.selected ? '#543e3e' : '#e5dece'};
  color: ${props => props.selected ? 'white' : 'black'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  border-radius: 0.3em;
  padding: 0.6em;
  margin: 0.6em;
  cursor: pointer;
`

const Td = styled.td`
  padding: 0.4em;
  ${props => props.isFirst && `
    border-top-left-radius: 0.4em;
    border-bottom-left-radius: 0.4em;
  `}
  ${props => props.isLast && `
    border-top-right-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
  `}
`

const DialogWithRequest = props => {
  const { text, title, initUrl, method, headers, itemSelected, onItemClick, customRender, renderPreview } = props
  const [show, setShow] = React.useState(false)
  const [url, setUrl] = React.useState(initUrl)

  const response = useFetch(url, method)

  React.useEffect(() => {
    setUrl(initUrl)
  }, [initUrl])

  return <>
    <DimBackground show={show} onClick={e => { setShow(false) }}>
      <DialogContainer onClick={e => { e.stopPropagation() }}>
        <DialogHeader>{title}</DialogHeader>
        {response ? <>
          <ContentContainer>
            <Table>
              <thead>
                <tr>
                  {headers.map((header, headerIdx) => <th key={headerIdx}>{header}</th>)}
                </tr>
              </thead>
              <tbody>
                {response.data.map((item, index) => {
                  return <DialogCard key={index} selected={itemSelected(item)} onClick={e => {
                    onItemClick(item)
                  }}>
                    {headers.map((header, headerIdx) => {
                      if (customRender && customRender[header]) {
                        return <Td key={headerIdx} isFirst={headerIdx === 0} isLast={headerIdx === headers.length - 1}>{customRender[header](item)}</Td>
                      }
                      return <Td key={headerIdx} isFirst={headerIdx === 0} isLast={headerIdx === headers.length - 1}>{item[header]}</Td>
                    })}
                  </DialogCard>
                })}
              </tbody>
            </Table>
          </ContentContainer>
          {response.paging && response.paging.previous && <Button type='button' onClick={e => {
            setUrl(response.paging.previous)
          }}>{'<< previous <<'}</Button>}
          {response.paging && response.paging.next && <Button type='button' onClick={e => {
            setUrl(response.paging.next)
          }}>{'>> next >>'}</Button>}
        </> : <div>Loading...</div>}
      </DialogContainer>
    </DimBackground>
    {renderPreview && renderPreview()}
    <Button type='button' onClick={e => { setShow(true) }}>{text}</Button>
  </>
}

export default DialogWithRequest