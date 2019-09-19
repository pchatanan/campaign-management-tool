import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import useUid from './useUid';

const useFetchDefaultSetting = () => {
  const [defaultSetting, setDefaultSetting] = React.useState(null)
  const uid = useUid()
  React.useEffect(() => {
    firebase.firestore().collection('defaultSetting').doc(uid).onSnapshot(doc => {
      setDefaultSetting(doc.data())
    })
  }, [uid])
  return defaultSetting
}

export default useFetchDefaultSetting