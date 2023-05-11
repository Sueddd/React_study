import React, { useState, useEffect } from "react";
import Timer from "./component/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {/** showTimer가 true일때만 보여주겠다는 뜻 */}
      {showTimer && <Timer />}
      {/** onClick으로 showTimer가 true면 false로 false면 true로 변경 */}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
