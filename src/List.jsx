import React, { useContext, useReducer, useState } from "react";
import Person from "./Person";
import { AppContext } from "./main";
import { data } from "./data";
import { CLEAR, REMOVE, RESET } from "./actions";
import reducer from "./reducer";

const defaultState = {
  people: data,
};

const List = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id: id } });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  const clear = () => {
    dispatch({ type: CLEAR });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button type="button" onClick={() => remove(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <hr />
      <button style={{ marginTop: "20px" }} type="button" onClick={reset}>
        Reset
      </button>
      <button
        style={{ marginTop: "20px", marginLeft: "10px" }}
        type="button"
        onClick={clear}
      >
        Clear All
      </button>
    </div>
  );
};

export default List;
