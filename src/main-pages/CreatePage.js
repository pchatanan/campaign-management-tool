import React from 'react'
import AdAccountsDialog from '../components/AdAccountsDialog';
import { Card, ResponsiveGrid } from '../ui';
import useAccount from '../custom-hooks/useAccount';
import LabelValuePair from '../components/LabelValuePair';
import firebase from 'firebase/app'
import 'firebase/firestore'
import useUid from '../custom-hooks/useUid';
import { useDispatch } from 'react-redux'
import { setDefaultSetting, setPage, setIg, setApp, setAgeMin, setAgeMax, setCountry, setGameName } from '../redux/actions';
import Toggle from '../components/Toggle';
import CreateNewCampaignDialog from '../components/CreateNewCampaignDialog';
import DisplaySummary from '../components/DisplaySummary';
import AdCampaignsDialog from '../components/AdCampaignsDialog';
import CreateNewAdSetDialog from '../components/CreateNewAdSetDialog';
import useDefaultSetting from '../custom-hooks/useDefaultSetting';
import useFetchDefaultSetting from '../custom-hooks/useFetchDefaultSetting';
import SetDefaultObject from '../components/SetDefaultObject';
import PagesDialog from '../components/PagesDialog';
import usePage from '../custom-hooks/usePage';
import useIg from '../custom-hooks/useIg';
import useApp from '../custom-hooks/useApp';
import IgsDialog from '../components/IgsDialog';
import AppsDialog from '../components/AppsDialog';
import ToggleTextInput from '../ui/ToggleTextInput';
import useAgeMin from '../custom-hooks/useAgeMin';
import useAgeMax from '../custom-hooks/useAgeMax';
import useCountry from '../custom-hooks/useCountry';
import CreateNewAdDialog from '../components/CreateNewAdDialog';
import GenerateCodeDialog from '../components/GenerateCodeDialog';
import useGameName from '../custom-hooks/useGameName';
import DeleteItemDialog from '../components/DeleteItemDialog';

const CreatePage = props => {
  const [firstTime, setFirstTime] = React.useState(true)
  const dispatch = useDispatch()
  const uid = useUid()
  const fetchedDefaultSetting = useFetchDefaultSetting()
  const defaultSetting = useDefaultSetting()

  React.useEffect(() => {
    if (fetchedDefaultSetting) {
      dispatch(setDefaultSetting(fetchedDefaultSetting, firstTime))
      setFirstTime(false)
    }
  }, [fetchedDefaultSetting, dispatch, firstTime])

  const account = useAccount()
  const page = usePage()
  const ig = useIg()
  const app = useApp()
  const ageMin = useAgeMin()
  const ageMax = useAgeMax()
  const country = useCountry()
  const gameName = useGameName()

  const isDefaultAccount = account && defaultSetting && defaultSetting.account && account.id === defaultSetting.account.id
  const isDefaultPage = page && defaultSetting && defaultSetting.page && page.id === defaultSetting.page.id
  const isDefaultIg = ig && defaultSetting && defaultSetting.ig && ig.id === defaultSetting.ig.id
  const isDefaultApp = app && defaultSetting && defaultSetting.app && app.id === defaultSetting.app.id

  const isDefaultAgeMin = ageMin && defaultSetting && defaultSetting.ageMin && ageMin === defaultSetting.ageMin
  const isDefaultAgeMax = ageMax && defaultSetting && defaultSetting.ageMax && ageMax === defaultSetting.ageMax
  const isDefaultCountry = country && defaultSetting && defaultSetting.country && country === defaultSetting.country
  const isDefaultGameName = gameName && defaultSetting && defaultSetting.gameName && gameName === defaultSetting.gameName
  return <div>
    <Card>
      <AdAccountsDialog />
      {account && <LabelValuePair label='Ad Account' value={account.name} />}
      {account && <Toggle on={isDefaultAccount} onClick={e => {
        firebase.firestore().collection('defaultSetting').doc(uid).set({
          ...defaultSetting,
          account: isDefaultAccount ? null : account
        })
          .then(() => {
            console.log('Default ad accoutn is set.');
          })
          .catch((error) => {
            console.error("Error setting default ad account: ", error);
          })
      }} />}
    </Card>
    {account && <Card>
      <ResponsiveGrid>
        <SetDefaultObject label='Page' value={page} getName={value => {
          return value.name
        }} getImgUrl={value => {
          return value.picture.data.url
        }} renderButton={() => {
          return <PagesDialog selectedPage={page} onPageSelected={selectedPage => {
            dispatch(setPage(selectedPage))
          }} />
        }} defaultSelected={isDefaultPage} toggleClick={e => {
          firebase.firestore().collection('defaultSetting').doc(uid).set({
            ...defaultSetting,
            page: isDefaultPage ? null : page
          })
            .then(() => {
              console.log('Default page is set.');
            })
            .catch((error) => {
              console.error("Error setting default page: ", error);
            })
        }} />
        <SetDefaultObject label='Ig' value={ig} getName={value => {
          return value.username
        }} getImgUrl={value => {
          return value.profile_pic
        }} renderButton={() => {
          return <IgsDialog selectedIg={ig} onIgSelected={selectedIg => {
            dispatch(setIg(selectedIg))
          }} />
        }} defaultSelected={isDefaultIg} toggleClick={e => {
          firebase.firestore().collection('defaultSetting').doc(uid).set({
            ...defaultSetting,
            ig: isDefaultIg ? null : ig
          })
            .then(() => {
              console.log('Default ig is set.');
            })
            .catch((error) => {
              console.error("Error setting default ig: ", error);
            })
        }} />
        <SetDefaultObject label='Application' value={app} getName={value => {
          return value.name
        }} getImgUrl={value => {
          return value.logo_url
        }} renderButton={() => {
          return <AppsDialog selectedApp={app} onAppSelected={selectedApp => {
            dispatch(setApp(selectedApp))
          }} />
        }} defaultSelected={isDefaultApp} toggleClick={e => {
          firebase.firestore().collection('defaultSetting').doc(uid).set({
            ...defaultSetting,
            app: isDefaultApp ? null : app
          })
            .then(() => {
              console.log('Default app is set.');
            })
            .catch((error) => {
              console.error("Error setting default app: ", error);
            })
        }} />
        <ToggleTextInput label='Age Min' value={ageMin} onChange={value => {
          dispatch(setAgeMin(value))
        }} on={isDefaultAgeMin} onClick={e => {
          firebase.firestore().collection('defaultSetting').doc(uid).set({
            ...defaultSetting,
            ageMin: isDefaultAgeMin ? null : ageMin
          })
            .then(() => {
              console.log('Default Min Age is set.');
            })
            .catch((error) => {
              console.error("Error setting Min Age: ", error);
            })
        }} />
        <ToggleTextInput label='Age Max' value={ageMax} onChange={value => {
          dispatch(setAgeMax(value))
        }} on={isDefaultAgeMax} onClick={e => {
          firebase.firestore().collection('defaultSetting').doc(uid).set({
            ...defaultSetting,
            ageMax: isDefaultAgeMax ? null : ageMax
          })
            .then(() => {
              console.log('Default Max Age is set.');
            })
            .catch((error) => {
              console.error("Error setting Max Age: ", error);
            })
        }} />
        <ToggleTextInput label='Country (2 letters)' value={country} onChange={value => {
          dispatch(setCountry(value))
        }} on={isDefaultCountry} onClick={e => {
          firebase.firestore().collection('defaultSetting').doc(uid).set({
            ...defaultSetting,
            country: isDefaultCountry ? null : country
          })
            .then(() => {
              console.log('Default Country is set.');
            })
            .catch((error) => {
              console.error("Error setting Country: ", error);
            })
        }} />
        <ToggleTextInput label='Game name' value={gameName} onChange={value => {
          dispatch(setGameName(value))
        }} on={isDefaultGameName} onClick={e => {
          firebase.firestore().collection('defaultSetting').doc(uid).set({
            ...defaultSetting,
            gameName: isDefaultGameName ? null : gameName
          })
            .then(() => {
              console.log('Default Game Name is set.');
            })
            .catch((error) => {
              console.error("Error setting Game Name: ", error);
            })
        }} />
      </ResponsiveGrid>
    </Card>}
    {account && <Card>
      <CreateNewCampaignDialog />
      {/* <AdCampaignsDialog /> */}
      <CreateNewAdSetDialog />
      <CreateNewAdDialog />
      <DeleteItemDialog />
      <GenerateCodeDialog />
    </Card>}
    {<Card>
      <DisplaySummary />
    </Card>}
  </div>
}

export default CreatePage