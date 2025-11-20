import React, { useState } from "react";

const Tooltip = ({text, children}) => {

    const [show, setShow] = useState(false);
  return (
    <span className="tootip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
       style={{ position: 'relative' }}
    >
        {children}

        {show && (
            <span className="tooltiptext" style={{ position: "absolute", background: "black", color: "white", padding: "5px", borderRadius: "4px", top: "25px" }}>{text}</span>
        )}
    </span>
  );
};

export default Tooltip;
