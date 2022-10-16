import React from "react";

import "./App.css";
import Timer from "./component/Timer";

const App = () => {
  return (
    <>
      <div className="container">
        <Timer
          intitHour={0}
          initMin={0}
          initSec={0}
          closeMent={"타이머가 끝났습니다"}
        />
      </div>
    </>
  );
};

export default App;
