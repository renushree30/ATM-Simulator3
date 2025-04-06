const storedPIN = "4321";

function validateUserPIN() {
  const userPin = document.getElementById("pinInput").value;
  if (/^\d{4}$/.test(userPin) && userPin === storedPIN) {
    window.location.href = "feature/home.html"; // Redirect to the next page
  } else {
    document.getElementById("result").innerText = "Incorrect PIN. Try again.";
  }
}