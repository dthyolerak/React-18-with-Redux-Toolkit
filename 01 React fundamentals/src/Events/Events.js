import './events.css'
const Events = () => {
  const handleOnClick =()=>{
    alert("you click button")
  }
  const handleOnChange = (e) => {
    // console.log(e.target);
    console.log(e.target.value)
  }
  const handleForm = (e) => {
    e.preventDefault()
    console.log("we have handle the form")
  }
  return (
    <div className='topnav'>
      <a className='active' href='#home'>
        Home
      </a>
      <a href='#about'>About</a>
      <a href='#contact'>Contact</a>
      <div className='search-container'>
        <form onSubmit={handleForm}>
          <input
            type='text'
            placeholder='Search..'
            name='search'
            onChange={handleOnChange}
          />
          <button type='submit'>
            <i onClick={handleOnClick} className='fa fa-search'></i>
          </button>
        </form>
      </div>
    </div>
  )
}
export default Events
