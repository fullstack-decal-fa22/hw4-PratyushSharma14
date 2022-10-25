import React, { useState } from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = ({update}) => { 

  return (
    <div className="colorOptions">
        <Color color="red" handleClick ={update}/>
        <Color color="pink" handleClick ={update}/>
        <Color color="blue" handleClick ={update}/>
        <Color color="green" handleClick ={update}/>
    </div>
  );
}

export default Menu;