function Header (){
    return(
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Player 1: </span>
        </header>
    )
}
ReactDOM.render(
    header,
    document.getElementById('root')
);