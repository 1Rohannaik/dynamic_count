import React from 'react'
import "./index.css";

const Buttons = ({children , onClick}) => {
  return (
    <div className='btn'>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default Buttons;