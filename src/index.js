import React from 'react'
import ReactDom from 'react-dom/client'

const SongList = () => {
  return (
    <section>
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
    </section>
  )
}

const Song = () => {
  return (
    <>
      <Artwork />
      <Title />
      <Artist />
    </>
  )
}

const Artwork = () => (
  <img
    src='https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-El-Vert---unlock--[downloaded-on-mvaka-music-website].jpeg'
    alt='El Vert - unlock'
  />
)
const Title = () => <h2>El Vert - unlock</h2>
const Artist = () => {
  return <h3>Vert - unlock ft Co musiq</h3>
}
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<SongList />)
