import React from "react";
import { useParams } from "react-router-dom";

const Featured = () => {
  let { fname, lname, topic } = useParams();
  let name = `${fname} ${lname}`;

  return (
    <div className="main-content">
      {console.log(fname, "first name")}
      {console.log(lname, "lastname")}
      {console.log(topic, "topic")}
      <h2>Featured: </h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching
        courses about <strong>{topic}</strong>!
      </p>
    </div>
  );
};

export default Featured;
