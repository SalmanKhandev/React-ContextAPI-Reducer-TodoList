import React from "react";

const Person = ({ id, name }) => {
  console.log(id, name);
  return (
    <div>
      <h2 key={id}>{name}</h2>
      <button type="button">Remove</button>
    </div>
  );
};

export default Person;
