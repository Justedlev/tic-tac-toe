import classes from "./Square.module.css";
import { O, X } from "../../logic/SVG/SVG";

function Square(props) {
    return (
        <td className={classes.Square} onClick={props.onClick}>
            {props.value === "X" ? X : props.value === "O" ? O : null}
        </td>
    );
}

export default Square;
