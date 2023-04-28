import React, { useState } from 'react'

const Demo = () => {
  const [upiId, setUpiId] = useState("");
  const [isUpiIdValid, setIsUpiIdValid] = useState(false);

  async function verifyUpiId() {
    const response = await fetch(
      `https://upi.npci.org.in/qr/CheckTxnId/${upiId}`
    );
    const data = await response.json();
    setIsUpiIdValid(data && data.result && data.result.txnStatus === "UP")
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
        <button onClick={verifyUpiId}>Verify UPI ID</button>
        {isUpiIdValid ? (
          <p>UPI ID is valid</p>
        ) : (
          <p>UPI ID is invalid</p>
        )}
      </div>
    </>
  );

}

export default Demo