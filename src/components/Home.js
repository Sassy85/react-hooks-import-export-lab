import React from "react";
import {username, city} from "/home/sassy/development/labs/phase2/canvasLabs/react-hooks-import-export-lab/src/data/user.js"

function Home() {
  return (
    <div id="home">
      <h1>{username} is a Web Developer</h1>
      <h1> from {city}</h1>
    </div>
  );
}

export default Home