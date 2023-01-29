import React, { useState } from "react";

const AddPlayerForm = () => {
  const [value, setValue] = useState();
  return (
    <form>
      <input type="text" placeholder={"Enter a Player Name"} />
      <input type="submit" value={value} onChange={() => setValue()} />
    </form>
  );
};

export default AddPlayerForm;
