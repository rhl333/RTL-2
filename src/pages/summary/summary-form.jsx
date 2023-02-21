import React, { useState } from 'react';

export const SummaryForm = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <button disabled={disabled}>Click Me</button>
      <br />
      <label htmlFor="checkbox">checkbox</label>
      <input
        type="checkbox"
        name=""
        id="checkbox"
        onChange={() => setDisabled(!disabled)}
        defaultChecked={false}
      />
    </div>
  );
};
