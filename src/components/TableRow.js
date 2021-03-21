import React  from 'react'
import moment from 'moment'

const TableRow = ({ props }) => {
  const openSpotify = (uri) => {
    window.location.href = uri
  }

  const calculateTimeDiff = (createdAt) => {
    const diff = moment(createdAt).fromNow()

    return diff
  }

  return (
    <tr className="table-row" onClick={() => openSpotify(props.uri)}>
      <td className="table-row__td"><img className="table-row__td--album__cover" src={props.image_url} alt="" /></td>
      <td className="table-row__td">{props.song_name}</td>
      <td className="table-row__td">{props.artists.map(artist => artist.name).join(', ')}</td>
      <td className="table-row__td">{calculateTimeDiff(props.created_at)}</td>
    </tr>
  )
}

export default TableRow
