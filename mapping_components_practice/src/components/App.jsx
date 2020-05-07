import React from "react";
import Emojipedia from "../emojipedia";
import Divide from "../Divide";
//Here .. is used to indicate oustide the current directory
// function x(emojis) {
//   return (
//     <Divide
//       keys={emojis.id}
//       imgs={emojis.emoji}
//       names={emojis.name}
//       meanings={emojis.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(emojis => (
          <Divide
            keys={emojis.id}
            // emojis.id are placed in curly braces {} to get the value
            imgs={emojis.emoji}
            names={emojis.name}
            meanings={emojis.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
