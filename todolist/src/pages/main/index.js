import { useState } from "react";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";

const Mainpage = () => {
  const [showSign, setShowSign] = useState(false);

  return (
    <div>
      {!showSign && <Signin showSign={showSign} setShowSign={setShowSign} />}
      {showSign && <Signup showSign={showSign} setShowSign={setShowSign} />}
    </div>
  );
};
export default Mainpage;
