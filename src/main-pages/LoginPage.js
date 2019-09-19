import React from 'react'
import styled from 'styled-components'
import Facebook from '../ui/icons/Facebook';
import firebase from 'firebase/app'
import 'firebase/auth'
import Logo from '../ui/icons/Logo'
import { useDispatch } from 'react-redux'
import { setAuthState } from '../redux/actions';
import { AUTH_STATES } from '../redux/reducers/global';
import { LOCAL_STORAGE_KEYS } from '../common/constants';

const Background = styled.div`
  position: fixed;
  background: radial-gradient(circle, white 60%, #d1d1d1 90%, #3b3b3b 120%);
  width: 100vw;
  height: 100vh;
`

const CenterContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: fit-content;
`

const FacebookButton = styled.div`
  margin-top: 0.5em;
  margin-left: auto;
  margin-right: auto;
  background: #648AD6;
  box-shadow: 0 .4em #5874AD;
  :active {
    transform: translate(0,0.2em);
    box-shadow: 0 .2em #5874AD;
  }
  width: fit-content;
  cursor: pointer;
  font-size: calc(14px + 0.6vh);
  border-radius: 0.2em;
  overflow: hidden;
`

const LogoContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 3em;
  width: 3em;
  background: #5F84CC;
  padding: 0.5em;
  box-sizing: border-box;
`

const ButtonText = styled.div`
  display: inline-block;
  vertical-align: middle;
  color: white;
  font-size: 1.2em;
  padding: 0 1em;
  box-sizing: border-box;
`

const LoginPage = props => {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('ads_management,pages_show_list');
  const dispatch = useDispatch()
  return <Background>
    <CenterContainer>
      <Logo />
      <FacebookButton onClick={e => {
        firebase.auth().signInWithPopup(provider).then((result) => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          localStorage.setItem(LOCAL_STORAGE_KEYS.FB_TOKEN, token)
          // The signed-in user info.
          var user = result.user;
          dispatch(setAuthState(user, AUTH_STATES.AUTH))
          // ...
        }).catch((error) => {
          var errorMessage = error.message
          console.log(errorMessage)
        });
      }}>
        <LogoContainer>
          <Facebook fill={'white'} />
        </LogoContainer>
        <ButtonText>{'Login with Facebook'}</ButtonText>
      </FacebookButton>
    </CenterContainer>
  </Background>
}

export default LoginPage