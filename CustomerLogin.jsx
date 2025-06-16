import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

function CustomerLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal", // visible captcha
        callback: () => {}
      },
      auth
    );
  };

  const handleSendOtp = async () => {
    if (!phone) {
      alert("कृपया मोबाइल नंबर डालें");
      return;
    }

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, "+91" + phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP भेज दिया गया है ✅");
    } catch (error) {
      console.error("OTP भेजने में त्रुटि:", error);
      alert("OTP भेजने में त्रुटि ⚠️");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("कृपया OTP डालें");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      alert("Login सफल हुआ ✅");
    } catch (error) {
      alert("गलत OTP ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📱 Sirohi Services OTP Login</h2>

      <input
        type="text"
        placeholder="मोबाइल नंबर डालें"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />

      <div id="recaptcha-container"></div>

      <button onClick={handleSendOtp}>OTP भेजें</button>
      <br /><br />

      <input
        type="text"
        placeholder="OTP डालें"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <br /><br />
      <button onClick={handleVerifyOtp}>OTP Verify करें</button>
    </div>
  );
}

export default CustomerLogin;