
import React from 'react'
import '../styles/Table.css'
import TableRow from './TableRow'

const Table = ({...props}) => {
  const { scrobbles} = props

  return (
    <main className="main-wrapper">
      <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr className="table-row__header">
            <th className="table-row__th--show-on-mobile"></th>
            <th className="table-row__th">Title</th>
            <th className="table-row__th">Artists</th>
            <th className="table-row__th">Played</th>
          </tr>
        </thead>
        <tbody>
          {scrobbles.map((scrobble) => {
            return(<TableRow key={scrobble.id} props={scrobble}></TableRow>)
          })}
        </tbody>
      </table>
      </div>
    </main>
  )
}

export default Table
