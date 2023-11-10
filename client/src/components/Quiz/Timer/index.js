import React from "react";

const Timer = ({minute,second}) => {
  return (
    <div>
      <div style={{ color: minute <= 3 ? "red" : "white" }}>
        Time: {minute}:{second}
      </div>
    </div>
  );
};

export default Timer;
