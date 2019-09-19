import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './main-pages/HomePage';
import CreatePage from './main-pages/CreatePage';
import styled from 'styled-components'

const Content = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #e5dece;
  overflow: auto;
`

const AppRouter = props => {
  return <Content>
    <BrowserRouter>
      <Route component={NavBar} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/create' component={CreatePage} />
    </BrowserRouter>
  </Content>
}

export default AppRouter