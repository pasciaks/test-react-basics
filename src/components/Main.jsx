import React from "react";

import Bag from "./Bag";
import Apples from "./Apples";

function Main() {
  return (
    <>
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag>
        <Apples color="green" number="3" />
      </Bag>
    </>
  );
}

export default Main;
