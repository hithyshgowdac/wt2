document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting immediately
  
    // Clear previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(message => message.remove());
  
    let isValid = true;
  
    // Get form data
    const name = document.getElementById("name").value;
    const dept = document.getElementById("dept").value;
    const usn = document.getElementById("usn").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked");
  
    // Validate Name
    if (name.trim() === "") {
      isValid = false;
      showError("name", "Name is required.");
    }
  
    // Validate Department
    if (dept === "") {
      isValid = false;
      showError("dept", "Please select your department.");
    }
  
    // Validate USN
    if (usn.trim() === "") {
      isValid = false;
      showError("usn", "USN is required.");
    }
  
    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "" || !emailRegex.test(email)) {
      isValid = false;
      showError("email", "Please enter a valid email.");
    }
  
    // Validate Date of Birth
    if (dob === "") {
      isValid = false;
      showError("dob", "Date of birth is required.");
    }
  
    // Validate Gender
    if (!gender) {
      isValid = false;
      showError("gender", "Please select your gender.");
    }
  
    // If all validations pass, submit the form
    if (isValid) {
      document.querySelector("form").submit(); // Submit the form
    }
  });
  
  // Show error message
  function showError(field, message) {
    const fieldElement = document.getElementById(field);
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    fieldElement.insertAdjacentElement("afterend", errorMessage);
  }
  