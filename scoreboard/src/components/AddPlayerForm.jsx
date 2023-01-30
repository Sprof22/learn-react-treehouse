import React, { useState } from "react";

const AddPlayerForm = () => {
  const [value, setValue] = useState();
  return (
    <form>
    {console.log(value)}
      <input type="text" placeholder="Enter a Player Name" value={value} onChange={(event) => setValue(event.target.value)} />
      <input type="submit" value="Add a Player" />
    </form>
  );
};

export default AddPlayerForm;
