// Get popup and buttons
const popup = document.getElementById("service-popup");
const bookServiceBtn = document.getElementById("book-service-btn");
const closePopupBtn = document.getElementById("close-popup");

// Open the popup
bookServiceBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close the popup
closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Handle form submission
document.getElementById("book-service-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const serviceType = document.getElementById("service-type").value;
  const address = document.getElementById("address").value;

  // Simulate sending data
  console.log("Service Booking Details:");
  console.log({ name, phone, serviceType, address });

  // Display success message
  alert("Thank you for booking a service! We will contact you shortly.");

  // Clear the form and close the popup
  e.target.reset();
  popup.style.display = "none";
});
