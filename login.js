document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  error.style.display = "none";

  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30
      })
    });

    if (!res.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await res.json();

    // Store token (DummyJSON returns `accessToken`)
    sessionStorage.setItem("authToken", data.accessToken);

    // Optional: store user info
    sessionStorage.setItem("user", JSON.stringify(data));

    // Redirect ONLY after token is set
    window.location.replace("dashboard.html");

  } catch (err) {
    error.style.display = "block";
    error.textContent = "Invalid username or password.";
  }
});
