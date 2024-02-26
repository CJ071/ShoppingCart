import React from 'react';

function SubtotalField({ subtotal }) {
  return (
    <div>
      <label htmlFor="subtotal">Subtotal:</label>
      <input
        type="text"
        id="subtotal"
        value={subtotal}
        readOnly
      />
    </div>
  );
}

export default SubtotalField;
