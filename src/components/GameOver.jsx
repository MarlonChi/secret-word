import React from "react";

import "./GameOver.scss";

export const GameOver = ({ retry, score }) => {
  return (
    <div className="GameOver">
      <h1>Fim de Jogo!</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  );
};
