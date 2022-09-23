import React from 'react'

export default function SpotifyCardTemplate({ artists, cover, name, totalSongs }) {
  const artistInfoStart = artists.length > 1 ? 'Artists: ' : 'Artist: '
  const artistInfoArray = artists.map((artist) => {
    return artist.name
  })
  const artistInfo = artistInfoStart + artistInfoArray.join(', ')

  let songs = totalSongs > 1 ? `${totalSongs} songs` : 'Single'

  return (
    <div className="album-card">
      <div className="album-art">
        <img src={cover}></img>
        <div className="hover-info">
          <span className="artist-info">{artistInfo}</span>
          <span className="song-count">{songs}</span>
        </div>
        <div className="album-background"></div>
      </div>
      <h3 className="album-name">{name}</h3>
    </div>
  )
}
