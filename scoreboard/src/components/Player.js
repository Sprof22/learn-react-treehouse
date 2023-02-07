import React from "react";
import PropTypes from 'prop-types'
import Counter from "./Counter";

const Player = ({name, id, score, changeScore, removePlayer}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => removePlayer(id)}
        >
          ✖
        </button>
        {name}
      </span>

      <Counter
        score={score}
        id={id}
        changeScore={changeScore}
      />
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  score: PropTypes.number,
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func,
}

export default Player;
