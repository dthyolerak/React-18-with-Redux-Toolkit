const song1 = {
  artist: 'Donnex',
  title: 'MUNAGUNDIKA- EXO BARZ PROD BY KDRIZZ GENOHTYPE',
  img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-MUNAGUNDIKA--EXO-BARZ-PROD--BY-KDRIZZ--GENOHTYPE--MUSIC-PRESENT--[downloaded-on-mvaka-music-website].jpeg',
}
const song2 = {
  artist: 'Donnex',
  title: 'UNIVERSAL BADMAN - EXO BARZ PROD BY EVAWIZ',
  img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-UNIVERSAL-BADMAN---EXO-BARZ-PROD--BY-EVAWIZ--[downloaded-on-mvaka-music-website].jpeg',
}
const song3 = {
  artist: 'Donnex',
  title: 'GANGSTER- EXO BARZ PROD BY KDRIZZ GENOHTYPE MUS',
  img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-GANGSTER--EXO-BARZ-PROD--BY-KDRIZZ--GENOHTYPE--MUSIC-PRESENT--[downloaded-on-mvaka-music-website].jpeg',
}
const song4 = {
  artist: 'Donnex',
  title: 'Khelele By Moonra Paul A Blantyre, Bangwe Based',
  img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-Khelele-by-Moonra-Paul-a-Blantyre,-Bangwe-based-thoughtful-artist--[downloaded-on-mvaka-music-website].jpeg',
}
const song5 = {
  artist: 'Donnex',
  title: 'Princi Musiq - I Believe Ft Chizmo Sting',
  img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-Princi-Musiq---I-believe-ft--Chizmo-Sting-[downloaded-on-mvaka-music-website].jpeg',
}
const song6 = {
  artist: 'Donnex',
  title: 'STYLE YANGA BY JEBREEH | GENOHTYPE MUSIC 🎵 PRE',
  img: 'https://mvaka.com/media/Malawi/profile1384267590/[mvaka]-STYLE-YANGA-BY-JEBREEH-%7C--GENOHTYPE-MUSIC-%F0%9F%8E%B5-PRESENT--[downloaded-on-mvaka-music-website].jpeg',
}
export const SongList = () => {
  return (
    <div className='song-list'>
      <h2>Songs list</h2>
      <div className='songs-contain'>
        <Song img={song1.img} title={song1.title} artist={song1.artist}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button>Click Me</button>
        </Song>
        <Song img={song2.img} title={song2.title} artist={song2.artist}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button>Click Me</button>
        </Song>
        <Song img={song3.img} title={song3.title} artist={song3.artist}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button>Click Me</button>
        </Song>
        <Song img={song4.img} title={song4.title} artist={song4.artist}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button>Click Me</button>
        </Song>
        <Song img={song5.img} title={song5.title} artist={song5.artist}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button>Click Me</button>
        </Song>
      </div>
    </div>
  )
}

const Song = ({img, artist, title, children}) => {
    // const  {img, artist, title} = props;
  return (
    <div className='song'>
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <p>{artist}</p>
      {children}
    </div>
  )
}
