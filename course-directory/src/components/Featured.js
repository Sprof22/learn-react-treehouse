import React from "react";
import { useParams } from "react-router-dom";

const Featured = () => {
  let { name, topic } = useParams();
  name = name.replace('-', ' ');

  return (
    <div className="main-content">
      
      {console.log(name, "lastname")}
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
