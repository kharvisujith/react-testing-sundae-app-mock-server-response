import { useState } from "react";

const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [over, setOver] = useState(false);

  const handleCheckBoxChange = (event) => {
    if (event.target.checked) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <input type="checkbox" onChange={handleCheckBoxChange} id="ck-box" />
      <label
        htmlFor="ck-box"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        terms and conditions
      </label>
      <button disabled={disabled}>Submit Order</button>
      {over && (
        <div>
          <h1>keek</h1>
        </div>
      )}
    </>
  );
};
export default SummaryForm;
