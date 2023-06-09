import React from "react";

import "./StartScreen.scss";

export const StartScreen = ({ startGame }) => {
  return (
    <div className="StartScreen">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};
