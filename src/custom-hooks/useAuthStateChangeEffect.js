import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setAuthState } from '../redux/actions';
import { AUTH_STATES } from '../redux/reducers/global';

const useAuthStateChangeEffect = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      dispatch(setAuthState(user, user ? AUTH_STATES.AUTH : AUTH_STATES.NONAUTH))
    })
  }, [dispatch])
}

export default useAuthStateChangeEffect