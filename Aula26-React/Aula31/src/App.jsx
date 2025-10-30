import { useState } from "react"
import style from "./App.module.css"
function App() {
   
  const [dark, setDark] = useState(false)

  return (
     <div className={dark? style.dark : style.light} >
        <h1>DarkMode</h1>
        <h2>{dark ? '🌑' : '🌕'} </h2>
        <button className={style.btn} onClick={() => setDark(!dark) }>{dark ? 'LightMode' : 'DarkMode'} </button>
      </div>
  )
}

export default App
