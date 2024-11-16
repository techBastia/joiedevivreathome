document.addEventListener("DOMContentLoaded", function () {
  // Get modal and button elements
  const serviceModal = document.getElementById("service-modal");
  const checkoutModal = document.getElementById("checkout-modal");
  const serviceCloseBtn = document.getElementById("service-close-btn");
  const checkoutCloseBtn = document.getElementById("checkout-close-btn");
  const addItemBtn = document.getElementById("add-item-btn");
  const checkoutBtn = document.getElementById("checkout-btn");
  const checkoutForm = document.getElementById("checkout-form");

  // Track selected services
  let selectedServices = [];

  // Show Service Modal when a user clicks on "Book For Men" or "Book For Women"
  document.getElementById("mens-services").addEventListener("click", function () {
    openModal(serviceModal);
  });

  document.getElementById("womens-services").addEventListener("click", function () {
    openModal(serviceModal);
  });

  // Close service modal
  serviceCloseBtn.addEventListener("click", function () {
    closeModal(serviceModal);
  });

  // Close checkout modal
  checkoutCloseBtn.addEventListener("click", function () {
    closeModal(checkoutModal);
  });

  // Handle adding items
  addItemBtn.addEventListener("click", function () {
    // Get selected services from the checkboxes
    const checkboxes = document.querySelectorAll(".service-checkbox:checked");
    selectedServices = Array.from(checkboxes).map(checkbox => checkbox.dataset.serviceName);

    // Show a message or update the UI
    document.getElementById("checkout-summary").innerText = "Selected Services: " + selectedServices.join(", ");
  });

  // Handle Checkout button click
  checkoutBtn.addEventListener("click", function () {
    openModal(checkoutModal);
  });

  // Handle form submission
  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;

    // Combine selected services and form data
    const formData = {
      name,
      contact,
      address,
      services: selectedServices,
    };

    // Send data to the server
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        alert("Order successfully sent!");
        closeModal(checkoutModal);
        // Reset form and services
        checkoutForm.reset();
        selectedServices = [];
      })
      .catch(error => {
        console.error("Error sending data:", error);
        alert("Something went wrong. Please try again.");
      });
  });

  // Helper functions to open and close modals
  function openModal(modal) {
    modal.style.display = "block";
  }

  function closeModal(modal) {
    modal.style.display = "none";
  }
});
