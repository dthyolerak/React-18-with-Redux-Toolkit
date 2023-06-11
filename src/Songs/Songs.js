import { songs } from './data'
import Song from './Song'
const Songs = () => {
  return (
    <div className='song-list'>
      <h2>List of All songs</h2>
      <div className='songs-contain'>
        {songs.map((song, index) => {
          return <Song {...song} key={song.id} index={index}/>
        })}
      </div>
    </div>
  )
}
export default Songs
