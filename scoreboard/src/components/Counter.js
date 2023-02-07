import React from "react";
import PropTypes from "prop-types"
const Counter = (props) => {
  const id = props.id;
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.changeScore(id, -1)}> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment" onClick={() => props.changeScore(id, 1)}> + </button>
    </div>
  );
};
 
Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore:  PropTypes.func ,
}
export default Counter;
