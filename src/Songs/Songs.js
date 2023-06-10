const songs = [
  {
    artist: 'Donnex',
    id: 1,
    title: 'MUNAGUNDIKA- EXO BARZ PROD BY KDRIZZ GENOHTYPE',
    img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-MUNAGUNDIKA--EXO-BARZ-PROD--BY-KDRIZZ--GENOHTYPE--MUSIC-PRESENT--[downloaded-on-mvaka-music-website].jpeg',
  },
  {
    artist: 'Donnex',
    id: 2,
    title: 'UNIVERSAL BADMAN - EXO BARZ PROD BY EVAWIZ',
    img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-UNIVERSAL-BADMAN---EXO-BARZ-PROD--BY-EVAWIZ--[downloaded-on-mvaka-music-website].jpeg',
  },
  {
    artist: 'Donnex',
    id: 3,
    title: 'GANGSTER- EXO BARZ PROD BY KDRIZZ GENOHTYPE MUS',
    img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-GANGSTER--EXO-BARZ-PROD--BY-KDRIZZ--GENOHTYPE--MUSIC-PRESENT--[downloaded-on-mvaka-music-website].jpeg',
  },
  {
    artist: 'Donnex',
    id: 4,
    title: 'Khelele By Moonra Paul A Blantyre, Bangwe Based',
    img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-Khelele-by-Moonra-Paul-a-Blantyre,-Bangwe-based-thoughtful-artist--[downloaded-on-mvaka-music-website].jpeg',
  },
  {
    artist: 'Donnex',
    id: 5,
    title: 'Princi Musiq - I Believe Ft Chizmo Sting',
    img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-Princi-Musiq---I-believe-ft--Chizmo-Sting-[downloaded-on-mvaka-music-website].jpeg',
  },
  {
    artist: 'Donnex',
    id: 6,
    title: 'STYLE YANGA BY JEBREEH | GENOHTYPE MUSIC 🎵 PRE',
    img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-STYLE-YANGA-BY-JEBREEH-%7C--GENOHTYPE-MUSIC-%F0%9F%8E%B5-PRESENT--[downloaded-on-mvaka-music-website].jpeg',
  },
]
//  const songList = songs.map((song)=>{
//     return (
//       <div className='song'>
//         <img src={song.img} alt={song.title} />
//         <h2> {song.title} </h2>
//         <p>{song.artist}</p>
//       </div>
//     )
//  })
export const SongList = () => {
  return (
    <div className='song-list'>
      <h2>Songs list</h2>
      <div className='songs-contain'>
        {songs.map((song) => {
          const { title, img, artist, id } = song
          //   return <Song title={title} img={img} artist={artist} key={id}/>
          //   return <Song song={song} key={song.book} />
          return <Song {...song} key={song.id} />
        })}
        {/* {songList} */}
      </div>
    </div>
  )
}

const Song = ({ img, artist, title, id, children }) => {
  // const  {img, artist, title} = props;
  return (
    <div className='song'>
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <p>{artist}</p>
    </div>
  )
}
