import ReactDOM from "react-dom/client"
import { SongList } from "./Songs/Songs"
import "./index.css"
const App = () => {
  return (
    <SongList/>
  )
}
const app = ReactDOM.createRoot(document.getElementById('root'))

app.render(<App/>)