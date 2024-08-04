/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const CardGame = () => {
  return (
    <div className="CARD-GAME">
      <div className="GAME-AREA">
        <div className="overlap">
          <div className="ENEMY">
            <div className="div">
              <div className="overlap-group">
                <div className="div">
                  <div className="ENEMY-DECK-AMMOUNT">
                    <div className="DECK-AMMOUNT">
                      <div className="text-wrapper">0/0</div>
                      <div className="text-wrapper-2">CARTAS NO DECK</div>
                    </div>
                    <div className="SIDE-LEFT" />
                  </div>
                  <div className="SIDE-RIGHT" />
                </div>
                <div className="ENEMY-2">
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                </div>
              </div>
            </div>
            <div className="BOTTOM-BAR" />
          </div>
          <div className="OWNER">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="OWNER-2">
                  <div className="rectangle-3" />
                  <div className="rectangle-4" />
                </div>
                <div className="SIDE">
                  <div className="SIDE-LEFT-2" />
                  <div className="DECK">
                    <div className="DECK-AMMOUNT-2">
                      <div className="text-wrapper">0/0</div>
                      <div className="text-wrapper-2">CARTAS NO DECK</div>
                    </div>
                    <img className="img" alt="Side RIGHT" src="/img/side-right.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="TOP-BAR" />
          </div>
          <div className="INFO">
            <div className="overlap-2">
              <div className="MIDDLE-DETAIL">
                <div className="MANA-DETAILS">
                  <div className="text-wrapper-3">MANA</div>
                  <div className="QUANTIDADE">1/10</div>
                </div>
              </div>
              <div className="game-buttons">
                <div className="TURN-button">
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">FIM DO TURNO</div>
                  </div>
                </div>
                <div className="CHAT-button">
                  <div className="overlap-3">
                    <div className="text-wrapper-5">ABRIR CHAT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
