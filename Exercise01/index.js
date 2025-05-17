const hardName = "admin";
const hardPassword = "admin123";

function validate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const nameInput = document.getElementById("nameInput").value;
      const passwordInput = document.getElementById("passwordInput").value;

      if (nameInput === hardName && passwordInput === hardPassword) {
        resolve("✅ Log in Success");
      } else {
        reject("❌ Log in Failed");
      }
    }, 5000);
  });
}

function loginHandle() {
  const display = document.getElementById("displayResult");
  display.innerHTML = "⏳ Checking...";

  validate()
    .then((message) => {
      display.innerHTML = message;
      display.classList.remove("text-red-500");
      display.classList.add("text-green-500");
    })
    .catch((message) => {
      display.innerHTML = message;
      display.classList.remove("text-green-500");
      display.classList.add("text-red-500");
    });
}
