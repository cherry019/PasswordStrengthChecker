const passwordInput = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const messageBox = document.getElementById("strength-message");
const suggestionBox = document.getElementById("suggestion-box");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[\W]/.test(password)) strength++;

  let fillWidth = "0%";
  let fillColor = "";
  let strengthText = "Very Weak";

  if (strength === 0) {
    fillWidth = "0%";
    fillColor = "";
    strengthText = "None";
  } else if (strength === 1) {
    fillWidth = "25%";
    fillColor = "weak";
    strengthText = "Weak 🔴";
    suggestionBox.innerText = "⚠️ Use at least 8 characters.";
  } else if (strength === 2) {
    fillWidth = "50%";
    fillColor = "medium";
    strengthText = "Medium 🟠";
    suggestionBox.innerText = "🔸 Add numbers or special characters.";
  } else if (strength === 3) {
    fillWidth = "75%";
    fillColor = "medium";
    strengthText = "Good 🟡";
    suggestionBox.innerText = "👍 Add special characters to make it stronger.";
  } else if (strength === 4) {
    fillWidth = "100%";
    fillColor = "strong";
    strengthText = "Strong 🟢";
    suggestionBox.innerText = "✅ Great! Your password is strong.";
  }

  strengthFill.style.width = fillWidth;
  strengthFill.className = `strength-fill ${fillColor}`;
  messageBox.innerHTML = `Password Strength: <b>${strengthText}</b>`;
});
