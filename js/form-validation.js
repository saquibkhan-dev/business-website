function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("All fields are required");
    return false;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return false;
  }

  alert("Form submitted successfully");
  return true;
}
