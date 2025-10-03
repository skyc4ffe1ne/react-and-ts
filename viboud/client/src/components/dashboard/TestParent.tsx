import React, { useState } from "react";
import TestChild from "./TestChild";

export default function TestParent() {
  const [val, setVal] = useState<string>("hello");

  console.log("Parent setVal:", setVal);

  return (
    <div>
      <h1>Parent</h1>
      <TestChild text={val} setText={setVal} />
    </div>
  );
}
