import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

const SongList = () => {
  return (
    <section className='song-list'>
      <h1 className='main-title'>List of new Songs</h1>
      <div className='songs-contain'>
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
      </div>
    </section>
  )
}

const Song = () => {
  const title = 'El Vert - unlock'
  const artist = 'Vert - unlock ft Co musiq'
  const img = 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-El-Vert---unlock--[downloaded-on-mvaka-music-website].jpeg'
  return (
    <div className='song'>
      <img
        src={img}
        alt={title}
      />
      <h2 style={{ color: 'red' }}> {title} </h2>
      <p> {artist} </p>
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<SongList />)
