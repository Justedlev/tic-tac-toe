import React, { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import classes from "./Game.module.css";
import { calculateWinner, thinkingProcess } from "./logic/Mind/mind";

export const GameContext = React.createContext();

function Game() {
    const [data, setData] = useState({
        square: [],
        isNextX: true,
        winner: null,
    });

    const handleClick = (i) => {
        const squareArr = [...data.square];
        if (data.winner || squareArr[i]) {
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
            setTimeout(() => handleClick(thinkingProcess(data.square)), 2000);
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
                    {data.winner ? (
                        <span
                            style={
                                data.winner === "X"
                                    ? { color: "#3FC0DD" }
                                    : { color: "#ED55A9" }
                            }
                        >
                            Winner: {data.winner}
                        </span>
                    ) : (
                        <span>
                            Next Player:
                            <span
                                style={{
                                    color: data.isNextX ? "#3FC0DD" : "#ED55A9",
                                }}
                            >
                                {data.isNextX ? " X" : " O"}
                            </span>
                        </span>
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
