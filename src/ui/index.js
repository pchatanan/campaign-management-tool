import styled from 'styled-components'

export const Card = styled.div`
  margin: 1em;
  padding: 0.4em;
  border-radius: 0.5em;
  background: white;
  box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.2);
`

export const ItemContainer = styled.div`
  background: ${props => props.selected ? '#5b86e5' : '#36d1dc'};
  color: ${props => props.selected ? 'white' : 'black'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  border-radius: 0.4em;
  padding: 0.4em;
  margin: 0.4em;
  cursor: pointer;
`

export const Button = styled.button`
  display: inline-block;
  vertical-align: middle;
  background: #0d1867;
  color: white;
  padding: 1em;
  margin: 0.4em;
  outline: none;
  border: none;
  border-radius: 0.5em;
  font-weight: bold;
  cursor: pointer;
  box-shadow: box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  transition: box-shadow 0.2s;
`

export const HeadLabel = styled.label`

`

export const Span = styled.span`
  vertical-align: middle;
  margin: 0.4em;
`
export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Label = styled.label`
  display: block;
  margin: 0.6em;
  color: Grey;
  font-weight: normal;
  &:focus-within {
    color: #543e3e;
    font-weight: bold;
  }
`

export const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid LightGrey;
  outline: none;
  &:focus {
    border-bottom: 2px solid #543e3e;
  }
`

export const Select = styled.select`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
  padding: 10px;
  border: none;
  border: 1px solid LightGrey;
  outline: none;
  &:focus {
    border: 2px solid #543e3e;
  }
`

export const ResponsiveGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

export const SampleName = styled.div`
  margin: 0.6em;
  padding: 0.6em;
  border-radius: 0.3em;
  background: #a70d0d;
  color: white;
`
