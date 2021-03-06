
import React from 'react'
import { useEffect, useState } from 'react';
import ScrobbleApi from '../api/scrobble-api'

// Styles
import '../styles/App.css';
import '../styles/Loader.css'

// Components
import Header from './Header'
import Table from './Table'
import WithTableLoading from './TableLoading'

const DEFAULT_ZONE_ID = 'U291bmRab25lLCwxa21ubGNxZ3BvZy9Mb2NhdGlvbiwsMWp2bnk3aTdoMWMvQWNjb3VudCwsMW5kbWR6bmF5Z3cv'

const App = () => {
  const TableLoading = WithTableLoading(Table)
  const [state, setState] = useState({
    loading: false,
    scrobbles: [],
  })

  useEffect(() => {
    setState({ loading: true})
    let apiInstance = new ScrobbleApi(DEFAULT_ZONE_ID)
    apiInstance.fetchHistory()
      .then((scrobbles) => {
        setTimeout(() => {
          setState({ loading: false, scrobbles: scrobbles.reverse()})
        }, 3000);
      })
  }, [setState])

  return (
    <div className="page-container">
      <Header></Header>
      <TableLoading path="/recently-played" isLoading={state.loading} scrobbles={state.scrobbles}></TableLoading>
    </div>
  );
}

export default App;
