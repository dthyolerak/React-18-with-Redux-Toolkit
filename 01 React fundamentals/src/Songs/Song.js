import { songs } from './data'
const Song = ({ id, artist, title, img, index}) => {
  const GetSong = (id) => {
    const song = songs.find((song) => song.id === id)
    console.log(song)
  }

  // const displaySong = ()=>{
  //   GetSong(id)
  // }
  return (
    <div className='song'>
        <p className='song-position'>{`# ${index +1}`}</p>
      <img src={img} alt={title} />
      <h2
        onClick={() => {
          GetSong(id)
        }}
      >
        {title}
      </h2>
      <h4> {artist} </h4>
    </div>
  )
}
export default Song
