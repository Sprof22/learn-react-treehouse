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

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayer={1} />

      {/* Player List */}
      <Player name="Richmond" score={59} />

      <Player name="Sarah" score={34} />
      <Player name="Gift" score={25} />
      <Player name="Otor" score={51} />
      <Player name="Daniel" score={5} />
      <Player name="Imma" score={5} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
