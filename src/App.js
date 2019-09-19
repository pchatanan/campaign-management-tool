import React from 'react';
import useAuthStateChangeEffect from './custom-hooks/useAuthStateChangeEffect';
import { useAuthState } from './custom-hooks/useRedux';
import { AUTH_STATES } from './redux/reducers/global';
import LoginPage from './main-pages/LoginPage';
import AppRouter from './AppRouter';

const App = props => {
  useAuthStateChangeEffect()
  const { state } = useAuthState()
  switch (state) {
    case AUTH_STATES.AUTHENTICATING:
      return <div>AUTHENTICATING</div>
    case AUTH_STATES.AUTH:
      return <AppRouter />
    case AUTH_STATES.NONAUTH:
      return <LoginPage />
    default:
      return <div></div>
  }
}

export default App;
