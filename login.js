document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Demo credentials
  if (username === "admin" && password === "Password123") {
    // Create a simple token
    const token = crypto.randomUUID();

    // Store token in sessionStorage
    sessionStorage.setItem("authToken", token);

    // Redirect to protected page
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid username or password.";
  }
});

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Hide" : "Show";
});
