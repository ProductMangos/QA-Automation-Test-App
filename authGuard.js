(function authGuard() {
  const token = sessionStorage.getItem("authToken");

  if (!token) {
    // No token → kick user back to login
    window.location.href = "index.html";
  }
})();

function logout() {
  sessionStorage.removeItem("authToken");
  window.location.href = "index.html";
}
