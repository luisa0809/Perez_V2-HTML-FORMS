document.addEventListener("DOMContentLoaded", function() {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(function(dropdownToggle) {
    dropdownToggle.addEventListener("click", function() {
      const menu = this.nextElementSibling;
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }});
  });

  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", function(e) {
      e.stopPropagation(); // Prevents the event from bubbling up to the parent elements
      const menu = this.parentNode;
      const dropdownToggle = menu.previousElementSibling;
      const selectedValue = this.textContent;
      dropdownToggle.textContent = selectedValue;
      menu.style.display = "none";

      menuItems.forEach(function(item) {
        item.classList.remove("selected");
      });
      this.classList.add("selected");

      // Reset the fields when selecting other information
      const nameField = document.querySelector("#name");
      const emailField = document.querySelector("#email");
      const ageField = document.querySelector("#age");
  });
  this.classList.add("selected");

  // Reset the fields when selecting other information
  const nameField = document.querySelector("#name");
  const emailField = document.querySelector("#email");
  const ageField = document.querySelector("#age");
  // Add other field selectors as needed
  nameField.value = nameField.getAttribute("data-initial-value");
  emailField.value = emailField.getAttribute("data-initial-value");
  ageField.value = ageField.getAttribute("data-initial-value");
  // Reset other fields as needed
});
});

const emailField = document.querySelector("#email");
const container = document.querySelector(".container"); // Replace with the appropriate container selector

emailField.addEventListener("input", function() {
const inputValue = this.value;
const trimmedValue = inputValue.trim();
const warningMessage = document.querySelector(".warning-message"); // Check if warning message already exists

if (!trimmedValue.endsWith("@gmail.com")) {
  if ( warningMessage){
      return; 
  }

  const newWarning = document.createElement("p");
  newWarning.textContent = "Please enter a valid Gmail Address.";
  newWarning.classList.add("warning-message");

  container.appendChild(newWarning);
} else {
  if (warningMessage) {
      container.removeChild(warningMessage);
  }
      }
  } ); 