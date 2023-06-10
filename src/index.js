import React from 'react'
import ReactDom from 'react-dom/client'

const Home = () => {
  return <>
  <Person />
  <Message/>
  </>
}
// const Home = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   )
// }

const Person = ()=> <h1>Donnex Kamsonga</h1>
const Message = () =>{
  return <p>This is simple message</p>
}
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<Home />)
