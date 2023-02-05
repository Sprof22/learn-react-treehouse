import React, { useState } from "react";

const AddPlayerForm = ({addPlayer}) => {
  const [value, setValue] = useState();

  const handleSubmit = (event) =>{
    event.preventDefault();
    addPlayer(value);
    setValue('')
  }
  return (
    <form onSubmit={(event)=> handleSubmit(event)}>
    {console.log(value)}
      <input type="text" placeholder="Enter a Player Name" value={value} onChange={(event) => setValue(event.target.value)} />
      <input type="submit" value="Add a Player" />
    </form>
  );
};

export default AddPlayerForm;
