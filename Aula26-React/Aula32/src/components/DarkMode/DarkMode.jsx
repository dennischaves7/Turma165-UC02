import { useState, useEffect } from "react"
import style from "./DarkMode.module.css"

export default function DarkMode (){
    
     const [dark, setDark] = useState(false)

     useEffect(() => {
        const hora = new Date().getHours()
        if (hora > 4 && hora < 18) {
          setDark(false) 
        } else {
          setDark(true) 
        }
      }, [dark])

return (
   <div className={dark? style.dark : style.light} >
      <h1>DarkMode</h1>
      <h2>{dark ? '🌑' : '🌕'} </h2>
      <button className={style.btn} onClick={() => setDark(!dark) }>{dark ? 'LightMode' : 'DarkMode'} </button>

      <h1>{new Date().getHours()}</h1>
    </div>
)
}