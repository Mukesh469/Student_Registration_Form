// code for hamburger menu
function myFunction() {
  var control = document.getElementById("controls");
  var absent = document.getElementById("absent");
  if (window.matchMedia("(max-width: 768px)").matches) {
    if (control.style.display == "block") {
      control.style.display = "none";
    } else {
      control.style.display = "block";
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  var menuItems = document.querySelectorAll(".absent");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        var control = document.getElementById("controls");
        control.style.display = "none";
      }
    });
  });
});

// form validation 1 personal detail:
document
  .getElementById("personal-info")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page
    validateForm();
  });

function validatePersonalInformation() {
  // Get form elements
  var ApplicantName = document.getElementById("ApplicantName").value;
  var FatherName = document.getElementById("FatherName").value;
  var MotherName = document.getElementById("MotherName").value;
  var AdhaarNumber = document.getElementById("AdhaarNumber").value;
  var dob = document.getElementById("date-of-birth");
  var Nationality = document.getElementById("Nationality").value;
  var Religion = document.getElementById("Religion").value;
  var Category = document.getElementById("Category").value;
  var Disablity = document.getElementById("Disablity").value;
  var OnlyChild = document.getElementById("only-child").value;

  if (ApplicantName === "") {
    alert("Applicant Name is required");
    return false;
  }
  if (FatherName === "") {
    alert("Father's Name is required");
    return false;
  }
  if (MotherName === "") {
    alert("Mother's Name is required");
    return false;
  }
  if (AdhaarNumber === "") {
    alert("Adhaar Number is required");
    return false;
  }
  if (dob === "") {
    alert("Date of Birth is required");
    return false;
  }
  if (Nationality === "") {
    alert("Nationality is required");
    return false;
  }
  if (Religion === "") {
    alert("Religion is required");
    return false;
  }
  if (Category === "") {
    alert("Category is required");
    return false;
  }
  if (Disablity === "") {
    alert("Disability is required");
    return false;
  }
  if (OnlyChild === "") {
    alert("Only Child status is required");
    return false;
  }

  // If all validations pass
  alert("Personal Information filled succefully");
  return true;
}

function validateMailingAddress() {
  var Address = document.getElementById("Address").value;
  var City = document.getElementById("City").value;
  var State = document.getElementById("State").value;
  var PinCode = document.getElementById("PinCode").value;
  var PhoneNumber = document.getElementById("PhoneNumber");
  var EmailAddress = document.getElementById("EmailAddress").value;
  var SetPassword = document.getElementById("SetPassword").value;
  var ConformPassword = document.getElementById("ConfirmPassword").value;

  if (
    Address == "" ||
    City == "" ||
    State == "" ||
    PinCode == "" ||
    PhoneNumber == "" ||
    EmailAddress == "" ||
    SetPassword == "" ||
    ConformPassword == ""
  ) {
    alert("All fields must be filled out");
    return false;
  }

  var pinCodePattern = /^[0-9]{6}$/;
  if (!pinCodePattern.test(PinCode)) {
    alert("Please enter a valid Pin Code");
    return false;
  }

  var phoneNumberPattern = /^[0-9]{10}$/;
  if (!phoneNumberPattern.test(PhoneNumber)) {
    alert("Please enter a valid Phone Number");
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(EmailAddress)) {
    alert("Please enter a valid Email Address");
    return false;
  }

  if (SetPassword !== ConformPassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}
// To hide and see the password :
function togglePasswordVisibility(id) {
  var passwordField = document.getElementById(id);
  var icon = document.getElementById(id + "Eye");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.innerHTML = "&#128065;"; // Eye-open icon
  } else {
    passwordField.type = "password";
    icon.innerHTML = "&#128065;"; // Eye-closed icon (use a different icon if available)
  }
}
