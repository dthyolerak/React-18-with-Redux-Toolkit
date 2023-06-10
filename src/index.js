import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
const title = 'El Vert - unlock'
const artist = 'Vert - unlock ft Co musiq'
const img =
  'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-El-Vert---unlock--[downloaded-on-mvaka-music-website].jpeg'

const SongList = () => {
  return (
    <section className='song-list'>
      <h1 className='main-title'>List of new Songs</h1>
      <div className='songs-contain'>
        <Song title={title} artist={artist} img={img} />
        <Song title={title} artist={artist} img={img} />
        <Song title={title} artist={artist} img={img} />
        <Song title={title} artist={artist} img={img} />
        <Song title={title} artist={artist} img={img} />
      </div>
    </section>
  )
}

const Song = (props) => {
  return (
    <div className='song'>
      <img src={props.img} alt={props.title} />
      <h2 style={{ color: 'red' }}> {props.title} </h2>
      <p> {props.artist} </p>
      <p>{props.testing}</p>
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<SongList />)
