import React from "react";

const Person = (props) => {
  const { person, onRemove } = props;

  return (
    <div>
      <h2 key={person.id}>{person.name}</h2>
      <button type="button" onClick={() => onRemove(person.id)}>
        Remove
      </button>
    </div>
  );
};

export default Person;
