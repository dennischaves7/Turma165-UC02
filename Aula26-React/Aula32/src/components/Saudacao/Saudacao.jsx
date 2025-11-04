import { useState, useEffect } from "react"

export default function Saudacao (){
    
     const [mensagem, setMensagem] = useState('')

     useEffect(() => {
        const hora = new Date().getHours()
        if (hora > 4 && hora < 12) {
            setMensagem('Bom dia!') 
        } else if(hora >11 && hora < 18) {
            setMensagem('Boa Tarde!') 
        }else if(hora > 17 && hora < 24){
            setMensagem('Boa Noite!')
        }else{
            setMensagem('Boa Madrugada!')
        }
      }, [])

return (
   <>
      <h1>{mensagem}</h1>
    </>

)
}