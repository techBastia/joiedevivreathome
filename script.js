document.addEventListener('DOMContentLoaded', () => {
  const mensServices = [
    { name: "Men's Haircut", price: "$20", image: "haircut.jpg" },
    { name: "Shaving", price: "$15", image: "shaving.jpg" },
  ];

  const womensServices = [
    { name: "Women's Haircut", price: "$25", image: "women_haircut.jpg" },
    { name: "Facial", price: "$30", image: "facial.jpg" },
  ];

  let selectedServices = [];

  const mensServicesButton = document.getElementById('mens-services');
  const womensServicesButton = document.getElementById('womens-services');
  const serviceModal = document.getElementById('service-modal');
  const servicesList = document.getElementById('services-list');
  const modalTitle = document.getElementById('modal-title');
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutSummary = document.getElementById('checkout-summary');
  const checkoutForm = document.getElementById('checkout-form');

  // Function to show services in modal
  const showServices = (services, title) => {
    modalTitle.textContent = title;
    servicesList.innerHTML = '';
    services.forEach((service) => {
      const serviceBox = document.createElement('div');
      serviceBox.classList.add('service-box');
      serviceBox.innerHTML = `
        <img src="${service.image}" alt="${service.name}" />
        <div class="service-name">${service.name}</div>
        <div class="service-price">${service.price}</div>
        <button>Add Item</button>
      `;
      serviceBox.querySelector('button').addEventListener('click', () => {
        selectedServices.push(service);
        alert(`${service.name} added to checkout.`);
      });
      servicesList.appendChild(serviceBox);
    });
    serviceModal.style.display = 'flex';
  };

  // Function to show checkout modal
  const showCheckout = () => {
    serviceModal.style.display = 'none';
    checkoutSummary.innerHTML = selectedServices
      .map((service) => `<p>${service.name} - ${service.price}</p>`)
      .join('');
    checkoutModal.style.display = 'flex';
  };

  // Event listener for men's and women's services buttons
  mensServicesButton.addEventListener('click', () => showServices(mensServices, "Men's Services"));
  womensServicesButton.addEventListener('click', () => showServices(womensServices, "Women's Services"));

  // Show checkout when clicking the checkout button
  document.querySelector('.checkout-btn').addEventListener('click', showCheckout);

  // Handle form submission (send booking info)
  checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Your booking has been sent!');
    checkoutModal.style.display = 'none';
  });

  // Close any modal with the class 'close-btn'
  const closeButtons = document.querySelectorAll('.close-btn');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Optional: Close the modal if clicking outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target === serviceModal) {
      serviceModal.style.display = 'none';
    } else if (event.target === checkoutModal) {
      checkoutModal.style.display = 'none';
    }
  });
});
