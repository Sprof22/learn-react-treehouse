function Header (props){
    return(
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Player {props.totalPlayer}: </span>
        </header>
    )
}
const Counter = () => {
    return (
        <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">35</span>
                <button className="counter-action increment">+</button>
            </div>
    )
}

const Player = () => {
    return(
        <div className="player">
            <span className="player-name">
                Richmond
            </span>
          
            <Counter />
            
        </div>
    )
}

const App = () => {
    return (
       <div className="scoreboard">
         <Header title="Scoreboard" totalPlayer={1} />
        
        {/* Player List*/}
        <Player />
       </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);