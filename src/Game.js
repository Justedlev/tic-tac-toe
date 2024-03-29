import React, { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import classes from "./Game.module.css";
import { calculateWinner, thinkingProcess } from "./logic/mind";
import { getRandomNumber, isFreeSpace } from "./util/utils";

export const GameContext = React.createContext();

function Game() {
    const [data, setData] = useState({
        square: [],
        isNextX: true,
        winner: null,
    });

    const handleClick = (i) => {
        const squareArr = [...data.square];
        if (i < 0 || data.winner || squareArr[i]) {
            return;
        }
        squareArr[i] = data.isNextX ? "X" : "O";
        setData({
            ...data,
            winner: calculateWinner(squareArr),
            square: squareArr,
            isNextX: !data.isNextX,
        });
    };

    useEffect(() => {
        if (!data.isNextX && !data.winner) {
            setTimeout(
                () => handleClick(thinkingProcess(data.square, 9)),
                getRandomNumber(500, 2000)
            );
        }
    });

    return (
        <GameContext.Provider
            value={{
                winner: data.winner,
                square: data.square,
                handleClick,
            }}
        >
            <div className={classes.Game}>
                <div className={classes.Game_name}>
                    <span>Tic</span>
                    <span>Tac</span>
                    <span>Toe</span>
                </div>
                <div className={classes.mini}>
                    <small>&beta; version</small>
                    <small>mini game</small>
                </div>
                <div className={classes.Game_info}>
                    {data.square.length === 0 ? (
                        <span>Move to start!</span>
                    ) : data.winner ? (
                        <span
                            style={
                                data.winner === "X"
                                    ? { color: "#3FC0DD" }
                                    : { color: "#ED55A9" }
                            }
                        >
                            {data.winner} WINNER!
                        </span>
                    ) : isFreeSpace(data.square, 9) ? (
                        <span>
                            Turn for:{" "}
                            {data.isNextX ? (
                                <span style={{ color: "#3FC0DD" }}>X</span>
                            ) : (
                                <span style={{ color: "#ED55A9" }}>O</span>
                            )}
                        </span>
                    ) : (
                        <span>DRAW!</span>
                    )}
                </div>
                <div>
                    <Board />
                </div>
                <button
                    disabled={data.square.length === 0}
                    onClick={() =>
                        setData({
                            ...data,
                            winner: null,
                            square: [],
                            isNextX: true,
                        })
                    }
                >
                    Restart Game
                </button>
            </div>
            <footer>
                &copy; {new Date().getFullYear()} developed by Justedlev
            </footer>
        </GameContext.Provider>
    );
}

export default Game;
