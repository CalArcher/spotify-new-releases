import React from 'react'
import 'style.css'
import SpotifyCards from './SpotifyCards'

export default function App() {
  return (
    <div className="home-cont">
      <h1>Hottest New Releases on Spotify</h1>
      <SpotifyCards></SpotifyCards>
    </div>
  )
}
