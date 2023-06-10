const title = 'El Vert - unlock'
const artist = 'Vert - unlock ft Co musiq'
const img =
  'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-El-Vert---unlock--[downloaded-on-mvaka-music-website].jpeg'
export const SongList = () => {
  return (
    <div className='song-list'>
      <h2>Songs list</h2>
      <div className='songs-contain'>
        <Song img={img} title={title} artist={artist} />
        <Song img={img} title={title} artist={artist} />
        <Song img={img} title={title} artist={artist} />
        <Song img={img} title={title} artist={artist} />
        <Song img={img} title={title} artist={artist} />
      </div>
    </div>
  )
}

const Song = (props) => {
  return (
    <div className='song'>
      <img src={props.img} alt={props.title} />
      <h2> {props.title} </h2>
      <p>{props.artist}</p>
    </div>
  )
}
