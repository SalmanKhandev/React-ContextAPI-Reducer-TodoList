import React, { useState, Suspense, lazy } from "react";
const Salman = lazy(() => import("./Salman"));

const UserTransition = () => {
  //   const [isPending, startTransition] = useTransition();
  //   const [peopleArray, setPeopleArray] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* <form action="">
        <input
          type="text"
          placeholder="Enter SomeThing"
          onChange={handleChange}
          name=""
          id=""
        />
      </form> */}

      <button type="button" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && (
        <Suspense fallback={<h1>Wa kena Drato</h1>}>
          <Salman />
        </Suspense>
      )}
    </div>
  );
};

export default UserTransition;
