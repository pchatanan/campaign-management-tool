import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Home, Logout } from '../ui/icons';
import firebase from 'firebase/app'
import 'firebase/auth'
import { LOCAL_STORAGE_KEYS } from '../common/constants';

const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 50px;
  background: #0d1867;
  box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.4);
  z-index: 5;
`

const DivIconContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
`

const DivIcon = props => {
  const { Icon, children, ...otherProps } = props
  return <DivIconContainer {...otherProps}>
    <Icon fill='white'>
      {children}
    </Icon>
  </DivIconContainer>
}

const NavBar = props => {
  return <NavBarContainer>
    <Link to='/'><DivIcon Icon={Home} /></Link>
    <DivIcon Icon={Logout} onClick={e => {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem(LOCAL_STORAGE_KEYS.FB_TOKEN)
      }).catch(error => {
        console.log(error.message)
      });
    }}>Logout</DivIcon>
  </NavBarContainer>
}

export default NavBar