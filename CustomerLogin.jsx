import React, { useState } from "react";
import { auth, RecaptchaVerifier } from "../firebase/firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";

function CustomerLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const handleSendOtp = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
      size: "invisible",
      callback: (response) => {}
    });

    signInWithPhoneNumber(auth, "+91" + phone, window.recaptchaVerifier)
      .then((confirmationResult) => {
        setConfirmation(confirmationResult);
        alert("OTP Sent!");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send OTP.");
      });
  };

  const verifyOtp = () => {
    if (confirmation) {
      confirmation
        .confirm(otp)
        .then((result) => {
          alert("Login Success!");
        })
        .catch((err) => {
          alert("Invalid OTP");
        });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Customer OTP Login</h2>
      <input type="text" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleSendOtp}>Send OTP</button>
      <br /><br />
      <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={verifyOtp}>Verify</button>
      <div id="recaptcha"></div>
    </div>
  );
}

export default CustomerLogin;
