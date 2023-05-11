import { useState } from "react";

function App() {
  const [names, setNames] = useState(["홍길동", "김영희"]);
  return (
    <div>
      <input />
      <button>Upload</button>
    </div>
  );
}
