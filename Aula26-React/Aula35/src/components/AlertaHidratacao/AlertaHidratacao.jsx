import { useState, useEffect } from "react";

export default function AlertaHidratacao({ user = "Dennis" }) {
  const [agua, setAgua] = useState(0);

  useEffect(() => {
    if (agua > 8) {
      alert("Meta de água alcançada!");
    }
  }, [agua]);

  return (
    <>
      <h1>Controle de água</h1>
      <button onClick={() => setAgua(agua + 1)}> Adicionar Copo </button>
      <p>{user} bebeu {agua} copos de água</p>
    </>
  );
}
