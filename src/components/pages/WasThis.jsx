import React, { useState } from "react";
import "../Styles/WasThis.css";

const WasThis = () => {
  const [isYes, setIsYes] = useState(false);
  const [isNo, setIsNo] = useState(false);
  const [isNo1, setIsNo1] = useState(false);

  const handleClick = () => {
    setIsYes(true);
    setIsNo(false);
  };

  const handleClick1 = () => {
    setIsYes(false);
    setIsNo(true);
  };

  const handleClick2 = () => {
    setIsNo1(true);
  };

  return (
    <>
      <div className="wasthis">Was this helpful?</div>
      <br />
      <div className="bottom-wasthis">
        <div className={`${isNo || isYes ? "yes-main_hide" : "yes-main"}`}>
          <div className="yes" onClick={handleClick}>
            Yes
          </div>
          <div className="no" onClick={handleClick1}>
            No
          </div>
        </div>
        {isYes && <p className="thank_you">Thank you for your feedback</p>}
        {isNo && (
          <div className={`${isNo1 || isYes ? "second_no_hide" : "second_no"}`}>
            <p className="thank_you1" onClick={handleClick2}>
              Information content is not helpful.
            </p>
            <p className="thank_you1" onClick={handleClick2}>
              Information is not easy to understand.
            </p>
            <p className="thank_you1" onClick={handleClick2}>
              Relevant information not provided.
            </p>
          </div>
        )}
        {isNo1 && <p className="thank_you">Thank you for your feedback</p>}
      </div>
    </>
  );
};

export default WasThis;
