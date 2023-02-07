import React, { useRef} from "react";

const AddPlayerForm = ({ addPlayer }) => {
  const playerInput = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    addPlayer(playerInput.current.value);
    event.currentTarget.reset()

  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      {console.log(playerInput)}
      <input
        type="text"
        placeholder="Enter a Player Name"
        ref={playerInput}
      />
      <input type="submit" value="Add a Player" />
    </form>
  );
};

export default AddPlayerForm;
