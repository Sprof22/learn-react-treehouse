const players= [
    {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  }
]

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Player {props.totalPlayer}: </span>
    </header>
  );
}
const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment">+</button>
    </div>
  );
};

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>

      <Counter score={props.score} />
    </div>
  );
};

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayer={1} />

      {/* Player List */}
      {props.initialPlayers.map(player =>
        <Player 
        name={player.name}
        score={player.score} />
      
      )
      }
      <Player name="Richmond" score={59} />

      
    </div>
  );
};
ReactDOM.render(<App initialPlayers={ players }/>, 
document.getElementById("root"));
