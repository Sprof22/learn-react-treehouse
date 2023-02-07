import React from "react";
import PropTypes from 'prop-types'
import Counter from "./Counter";
import Icon from "./Icon";

const Player = ({name, id, score, changeScore, removePlayer, isHighScore}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => removePlayer(id)}
        >
          ✖
        </button>
        <Icon isHighScore={isHighScore} />
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
  isHighScore: PropTypes.bool.isRequired
}

export default Player;
