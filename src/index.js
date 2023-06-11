import ReactDom from "react-dom/client"
import Songs from "./Songs/Songs"
import Events from "./Events/Events"
import "./index.css"
const App = () => {
  return (
    <div>
      <Events />
      <Songs/>
      </div>
  )
}

const app = ReactDom.createRoot(document.getElementById('donnex'))
app.render(<App/>)