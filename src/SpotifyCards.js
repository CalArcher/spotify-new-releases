import React, { useState, useEffect } from 'react'
import SpotifyCardTemplate from './SpotifyCardTemplate'

const newReleaseURl = 'https://api.spotify.com/v1/browse/new-releases'

//get authToken from here: https://developer.spotify.com/console/get-new-releases/

const authToken = '' //add authToken here

export default function SpotifyCards() {
  const [spotifyData, setSpotifyData] = useState([])

  const fetchData = (url) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      }
    })
      .then((res) => res.json())
      .then((data) => setSpotifyData(data.albums.items))
  }

  useEffect(() => {
    fetchData(newReleaseURl)
  }, [])

  if (spotifyData.length > 0) {
    return (
      <div className="album-cards-container">
        {spotifyData.map((album, idx) => {
          if (album) {
            return (
              <SpotifyCardTemplate
                key={idx}
                artists={album.artists}
                cover={album.images[1].url}
                name={album.name}
                totalSongs={album.total_tracks}
              ></SpotifyCardTemplate>
            )
          }
        })}
      </div>
    )
  }
}
