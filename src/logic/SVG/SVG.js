import classes from "./SVG.module.css";

export const O = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height={70}>
        <g
            fill="none"
            stroke="#FE55AC"
            strokeLinecap="round"
            strokeWidth={15}
            strokeMiterlimit={10}
        >
            <path
                id="o"
                className={classes.tictactoe}
                strokeDashoffset={240}
                strokeDasharray={240}
                d="M50,9.5c40.5,1,56.5,79-0.4,79.7C-2.5,87.5,8.5,8.5,50,9.5z"
            />
        </g>
    </svg>
);

export const X = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height={70}>
        <g
            fill="none"
            stroke="#01C1DE"
            strokeLinecap="round"
            strokeWidth={15}
            strokeMiterlimit={10}
        >
            <path
                className={classes.tictactoe}
                strokeDashoffset={104}
                strokeDasharray={104}
                d="M13.5,86.5c27.4-20.33,51.11-45.27,71-75"
            />
            <path
                className={classes.tictactoe}
                id={classes.slash}
                strokeDashoffset={76}
                strokeDasharray={76}
                d="M23.5,29.5c11.44,21.58,28.08,40.27,48.23,57"
            />
        </g>
    </svg>
);
