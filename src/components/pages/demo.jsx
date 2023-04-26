import React, { useState } from 'react'

const Demo = () => {
  const [ifscCode, setIfscCode] = useState('');
  const [bankDetails, setBankDetails] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://ifsc.razorpay.com/${ifscCode}`
      );
      const data = await response.json();
      setBankDetails(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            IFSC code:
            <input
              type="text"
              value={ifscCode}
              onChange={(event) => setIfscCode(event.target.value)}
            />
          </label>
          <button type="submit">Search</button>
        </form>
        {bankDetails && (
          <div>
            <p>Bank name: {bankDetails.BANK}</p>
            <p>State: {bankDetails.STATE}</p>
            <p>Branch: {bankDetails.BRANCH}</p>
          </div>
        )}
      </div>
    </>
  );

}

export default Demo