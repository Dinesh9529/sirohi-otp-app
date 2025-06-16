Put your HTML text here<!DOCTYPE html>
<html>
<head>
  <title>Sirohi Services OTP Login</title>
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>
  <style>
    body {
      font-family: Arial;
      padding: 40px;
      text-align: center;
    }
    input {
      padding: 8px;
      margin: 5px;
      width: 200px;
    }
  </style>
</head>
<body>
  <h2>📱 Sirohi Services OTP Login</h2>
  <input type="text" id="phone" placeholder="Enter phone number" /><br />
  <div id="recaptcha-container"></div>
  <button onclick="sendOTP()">Send OTP</button><br /><br />
  <input type="text" id="otp" placeholder="Enter OTP" /><br />
  <button onclick="verifyOTP()">Verify OTP</button>

  <script>
    // ✅ Firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyB9Ay-fL_ai0-vSIeeYMKrWGB_Fk2huJYM",
      authDomain: "sirohibazar-a1f79.firebaseapp.com",
      projectId: "sirohibazar-a1f79",
      storageBucket: "sirohibazar-a1f79.appspot.com",
      messagingSenderId: "943305647594",
      appId: "1:943305647594:web:b0bf07a2583b5a2e763e93",
    };

    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    });

    let confirmationResult;

    function sendOTP() {
      const phoneNumber = "+91" + document.getElementById("phone").value;
      const appVerifier = window.recaptchaVerifier;

      auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((result) => {
          confirmationResult = result;
          alert("OTP sent successfully ✅");
        })
        .catch((error) => {
          alert("Error sending OTP ❌");
        });
    }

    function verifyOTP() {
      const code = document.getElementById("otp").value;
      confirmationResult.confirm(code).then((result) => {
        alert("OTP Verified! ✅");
      }).catch((error) => {
        alert("Invalid OTP ❌");
      });
    }
  </script>
</body>
</html>