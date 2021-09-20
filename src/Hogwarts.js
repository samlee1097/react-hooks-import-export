import React from "react";
import whoseHouse from "./houses/whoseHouse";
import { colors, gryffMascot } from "./houses/Gryffindor";

function Hogwarts() {
  whoseHouse(); // => "HAGRID'S HOUSE!"
  console.log(colors);
  gryffMascot();
  return <h1>Welcome to Hogwarts!</h1>;
}

export default Hogwarts
