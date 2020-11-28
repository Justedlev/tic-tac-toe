import { useContext } from "react";
import Square from "../Square/Square";
import { GameContext } from "../../Game";
import classes from "./Board.module.css";

function Board() {
    const context = useContext(GameContext);
    const renderSquare = (i) => {
        return (
            <Square
                value={context.square[i]}
                onClick={() => context.handleClick(i)}
            />
        );
    };

    return (
        <table className={classes.Board}>
            <thead>
                <tr>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </tr>
                <tr>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </tr>
                <tr>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </tr>
            </thead>
        </table>
    );
}

export default Board;
