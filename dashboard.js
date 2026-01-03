document.addEventListener("DOMContentLoaded", async () => {
  const token = sessionStorage.getItem("authToken");

  if (!token) {
    window.location.replace("login.html");
    return;
  }

  try {
    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    if (!response.ok) {
      throw new Error("Unauthorized");
    }

    const data = await response.json();
    console.log("User:", data);

  } catch (error) {
    console.error("Auth failed:", error);
    sessionStorage.clear();
    window.location.replace("login.html");
  }
});
