import { useState, useEffect } from "react";
import styles from "./Veiculo.module.css";

export default function Veiculo() {
    // Estado do motor
    const [ligado, setLigado] = useState(false);

    // Estado da velocidade
    const [velocidade, setVelocidade] = useState(0);

    // Estado do combustível
    const [combustivel, setCombustivel] = useState(100);

    // Efeito para velocidade
    useEffect(() => {
        if (ligado) {
            console.log(`Velocidade atual: ${velocidade} km/h`);

            if (velocidade === 100) {
                alert("🚀 Cuidado! Alta velocidade!");
            }
        }
    }, [velocidade, ligado]);

    // Efeito para ligar/desligar
    useEffect(() => {
        if (ligado) {
            console.log("🚗 O carro foi ligado!");
        } else {
            console.log("🛑 O carro foi desligado!");
            setVelocidade(0);
            alert("🔴 O carro foi desligado!");
        }
    }, [ligado]);

    // Função ligar/desligar
    function ligarDesligar() {
        if (!ligado && combustivel <= 10) {
            alert("⛽ Sem combustível! Abasteça antes de ligar.");
            return;
        } else if (!ligado && combustivel < 20) {
            alert("⛽ O combustivél está abaixo de 20%");
        }
        setLigado(!ligado);
    }

    // Função acelerar
    function acelerar() {
        if (!ligado || velocidade > 119) {
            return;
        }

        if (combustivel > 0) {
            setVelocidade(velocidade + 10);
            setCombustivel(Math.max(combustivel - 5, 0));
        } else {
            alert("⛽ Acabou o combustível!");
            setLigado(false);
        }
    }

    // Função frear
    function frear() {
        if (!ligado) return;

        if (velocidade > 0) {
            setVelocidade(velocidade - 10);
            setCombustivel(Math.min(combustivel - 1, 100));
        }
    }

    // Função abastecer
    function abastecer() {
        if (!ligado && combustivel < 100) {
            setCombustivel(Math.min(combustivel + 5, 100));
        }
    }

    // JSX 
    return (
        <>
            <div className={styles.painel}>
                <h2>Painel do Veículo</h2>
                <p>
                    <strong>Status:</strong> {ligado ? "🚗 Ligado" : "🛑 Desligado"}
                </p>
                <p>
                    <strong>Velocidade:</strong> {velocidade} km/h
                </p>
                <p>
                    <strong>Combustível:</strong> {combustivel.toFixed(0)}%
                </p>

                <div className={styles.botoes}>
                    <button onClick={ligarDesligar}>
                        {ligado ? "Desligar" : "Ligar"}
                    </button>
                    <button onClick={acelerar} disabled={!ligado}>
                        Acelerar
                    </button>
                    <button onClick={frear} disabled={!ligado || velocidade === 0}>
                        Frear
                    </button>
                    <button onClick={abastecer}>Abastecer</button>
                </div>

                <div className="barraContainer">
                    <progress value={combustivel} max={100} disabled={ligado}></progress>
                </div>
            </div>
        </>
    );
}
