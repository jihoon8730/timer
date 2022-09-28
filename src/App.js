import React from "react";

import "./App.css";
import Timer from "./component/Timer";

const App = () => {
  return (
    <div className="container">
      <Timer
        intitHour={1}
        initMin={32}
        initSec={23}
        closeMent={"타이머 1이 끝났습니다"}
      />
      <Timer
        intitHour={0}
        initMin={0}
        initSec={5}
        closeMent={"타이머 2이 끝났습니다"}
      />
      <Timer
        intitHour={0}
        initMin={0}
        initSec={23}
        closeMent={"타이머 3이 끝났습니다"}
      />
    </div>
  );
};

export default App;
