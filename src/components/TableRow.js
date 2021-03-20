import React from 'react'

const TableRow = ({props}) => {

  const openSpotify = (uri) => {
    window.location.href = uri
  }
  return (
    <tr className="table-row" onClick={() => openSpotify(props.uri)}>
      <td className="table-row__td"><img className="table-row__td--album__cover" src={props.image_url} alt="" /></td>
      <td className="table-row__td">{props.song_name}</td>
      <td className="table-row__td">{props.artists.map(artist => artist.name).join(', ')}</td>
      <td className="table-row__td">{new Date(props.created_at).toLocaleString()}</td>
    </tr>
  )
}

export default TableRow
