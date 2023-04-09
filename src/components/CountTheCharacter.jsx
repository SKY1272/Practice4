import React, { useState } from "react";
function CountCharacter() {
  const [char, setChar] = useState("");
  // count the words;
  let word = char.split(/\s+/).filter((word) => word !== "").length;
  // console.log(word)
  // count the character
  let chart = char.length;

  return (
    <div>
      <textarea
        type="text"
        value={char}
        onChange={(e) => setChar(e.target.value)}
      />
      <p>{word}</p>
      <p>{chart}</p>
    </div>
  );
}
export default CountCharacter;
