import React, { useState } from 'react';
import useShopContext from '../../context/ShopContext/ShopContext';

function SubtotalField({ subtotal }) {
  const {subAmount}=useShopContext()
 
  return (
    <div>
      <label htmlFor="subtotal">Subtotal:</label>
      <input
        type="number"
        id="subtotal"
        value={subAmount}
        readOnly
      />
    </div>
  );
}

export default SubtotalField;
