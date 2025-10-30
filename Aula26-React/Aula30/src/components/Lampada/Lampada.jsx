import { useState } from "react";
import style from "./Lampada.module.css";

export default function Lampada () {
  const [lampada, setLampada] = useState(0);

  return (
    <div className={style.lampadacontainer}>
      {lampada % 2 === 0 ?
        <img className={style.lampadaimg}
          src="https://png.pngtree.com/png-vector/20240625/ourmid/pngtree-a-light-bulb-that-is-turned-off-and-on-white-background-png-image_12841116.png"
          alt="Lâmpada desligada" /> :
        <img className={style.lampadaimg}
          src="https://png.pngtree.com/png-vector/20240918/ourmid/pngtree-realistic-lit-light-bulb-isolated-on-transparent-background-png-image_13868719.png"
          alt="Lâmpada ligada" />
      }
      <button
        className={style.lampadabtn}
        onClick={() => setLampada(lampada + 1)}>
        {lampada % 2 === 0 ? 'Ligar' : 'Desligar'}
      </button>
    </div>
  );
}
  