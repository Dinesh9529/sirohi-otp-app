import React, { useState } from "react";
import { auth, RecaptchaVerifier } from "../firebase/firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";

function CustomerLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
      callback: () => {},
    }, auth);
  };

  const handleSendOtp = async () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    try {
      const result = await signInWithPhoneNumber(auth, "+91" + phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP Sent!");
    } catch (err) {
      alert("Error sending OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      alert("Login सफल हुआ ✅");
    } catch (err) {
      alert("गलत OTP ❌");
    }
  };

  return (
    <div>
      <h2>Customer Login</h2>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" />
      <button onClick={handleSendOtp}>Send OTP</button>
      <div id="recaptcha-container"></div>
      <br />
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
}

export default CustomerLogin;