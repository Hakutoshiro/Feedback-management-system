import axios from "axios"
import HomePage from "./pages/HomePage"


function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  

  return (
    <HomePage />
  )
}

export default App
