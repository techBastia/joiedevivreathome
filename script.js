document.addEventListener("DOMContentLoaded", () => {
  const mensServices = [
    {
      name: "Men's Combo A",
      details: ["Haircut", "Shaving/beard", "Cleansing", "Detan"],
      mrp: "1499",
      offerPrice: "699",
      image: "./male.PNG"
    },
    {
      name: "Men's Combo B",
      details: ["Haircut", "Shaving/beard", "Cleansing", "Signature facial"],
      mrp: "2499",
      offerPrice: "999",
      image: "./male.PNG"
    },
    {
      name: "Men's Combo C",
      details: ["Haircut", "Shaving/beard", "Cleansing", "Thai head massage"],
      mrp: "2999",
      offerPrice: "1199",
      image: "./male.PNG"
    },
    {
      name: "Men's Combo D",
      details: ["Haircut", "Shaving/beard", "Cleansing", "Hair colour"],
      mrp: "2999",
      offerPrice: "1499",
      image: "./male.PNG"
    },
    {
      name: "Cupping Massage E",
      details: ["Upper body", 
        "cashbackOffer: 500"
      ],
      mrp: "2499",
      offerPrice: "Only Cashback Available",
      image: "./male.PNG",
      cashbackOffer: "500"
    },
    {
      name: "Cupping Massage F",
      details: ["Full body",
        "cashbackOffer: 500"
      ],
      mrp: "3499",
      offerPrice: "Only Cashback Available",
      image: "./male.PNG",
      
    },
    {
      name: "Neuro Pain Relief Massage G",
      details: ["Full body", "Time Duration - 110 min", "cashbackOffer: 550"],
      mrp: "2999",
      offerPrice: "Only Cashback Available",
      image: "./male.PNG",
      
    },
    {
      name: "Deep Tissue Massage H",
      details: ["Full body", "Time Duration - 75 min", "cashbackOffer: 400"],
      mrp: "2199",
      offerPrice: "Only Cashback Available",
      image: "./male.PNG",
      
    }
  ];

  const womensServices = [
    {
      name: "Swedish/Kerla massage-WA",
      details: [
        "Time Duration 60 min",
        "MRP 2499",
        "Offer price 1499",
        "Cash back 400"
      ],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available"
    },
    {
      name: "Rica Wax - WB",
      details: [
        "Half arms - 299",
        "Full arm - 449",
        "Half leg - 399",
        "Full leg - 699",
        "Full body - 1699",
        "Under arm - 199",
        "Bikini wax (Brazilian stripless) - 1999",
        "Cash back - 400 (against service of 1500 and above)"
      ],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available",
    },
    {
      name: "Raga Bubble gum Pedi & Mani - WC",
      details: ["Pedi + Meni - 1999", "Cash back 500"],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available",
    },
    {
      name: "Aroma Magic Pedi & Mani - WD",
      details: ["Pedi + Mani - 1599", "Cash back 300"],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available"
    },
    {
      name: "Rica Roll-on Wax - WE",
      details: [
        "Half arms - 399",
        "Full arms - 599",
        "Half legs - 499",
        "Full legs - 699",
        "Full body - 2699",
        "Under arm - 299",
        "Bikini wax (Brazilian stripless) - 1999",
        "Cash back - 400 (against service of 1500 and above)"
      ],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available",
    },
    {
      name: "Signature Facial - WF",
      details: ["Biolume - 5 step - 1299", "Cash back 300"],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available"
    },
    {
      name: "Signature Facial - WG",
      details: ["Biolume - 7 step - 1599", "Cash back 400"],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available"
    },
    {
      name: "Body Polishing - WH",
      details: ["Time Duration 90 min", "Price - 2199", "Cash back - 400"],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available"
    },
    {
      name: "Kanpeki Japan Bridal Facial - WI",
      details: ["Time Duration 110 min", "MRP - 7999", "Offer price - 4999", "Cash back 400"],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available"
    },
    {
      name: "Nail - WJ",
      details: [
        "Gel polish - 1499",
        "Extension + gel polish - 2499",
        "Cash back - 400"
      ],
      image: "./female.PNG",
      offerPrice: "Only Cashback Available"
    }
  ];

  let selectedServices = [];

  const mensServicesButton = document.getElementById("mens-services");
  const womensServicesButton = document.getElementById("womens-services");
  const serviceModal = document.getElementById("service-modal");
  const servicesList = document.getElementById("services-list");
  const modalTitle = document.getElementById("modal-title");
  const checkoutModal = document.getElementById("checkout-modal");
  const checkoutSummary = document.getElementById("checkout-summary");
  const checkoutForm = document.getElementById("checkout-form");

  // Function to show services in modal
  const showServices = (services, title) => {
    modalTitle.textContent = title;
    servicesList.innerHTML = "";
    
    services.forEach((service) => {
      const serviceBox = document.createElement("div");
      serviceBox.classList.add("service-box");
      serviceBox.innerHTML = `
        <div class="service-box-content">
          <div class="service-image">
            <img src="${service.image}" alt="${service.name}" style="width: 100%; height: auto;" />
          </div>
          <div class="service-info" style="flex: 1;">
            <div class="service-name">${service.name}</div>
            <div class="service-details">${service.details.join("<br/>")}</div>
            ${
              service.mrp
                ? `<div class="service-mrp">MRP: ${service.mrp}</div>`
                : ""
            }
            <div class="service-price">Offer Price: ${service.offerPrice}</div>
            <button>Add Item</button>
          </div>
        </div>
      `;
  
      const addItemButton = serviceBox.querySelector("button");
    
      // Check if the item is already added
      const isAlreadyAdded = selectedServices.some((s) => s.name === service.name);
      
      if (isAlreadyAdded) {
        // Style the button as 'Added'
        addItemButton.disabled = true;
        addItemButton.textContent = "Added";
        addItemButton.style.backgroundColor = "#e4405f";  // Set background to red
        addItemButton.style.color = "white";          // Set text color to white
      }
    
      addItemButton.addEventListener("click", () => {
        if (!isAlreadyAdded) {
          // Add the service to the selected services list
          selectedServices.push(service);
  
          // Disable the button and update its text
          addItemButton.disabled = true;
          addItemButton.textContent = "Added";
  
          // Change button styles to red background and white text
          addItemButton.style.backgroundColor = "#e4405f";
          addItemButton.style.color = "white";
        }
      });
    
      // Append the service box to the list
      servicesList.appendChild(serviceBox);
    });
  
    // Apply background color change when services are displayed
    document.body.style.backgroundColor = "#d3d3d3"; // Set to desired background color
    serviceModal.style.display = "flex";
  };
  

  // Function to show checkout modal
  const showCheckout = () => {
    serviceModal.style.display = "none";
    checkoutSummary.innerHTML = selectedServices
      .map((service) => `<p>${service.name} - ${service.offerPrice}</p>`)
      .join("");
    checkoutModal.style.display = "flex";
  };

  // Event listener for men's and women's services buttons
  mensServicesButton.addEventListener("click", () =>
    showServices(mensServices, "Men's Services")
  );
  womensServicesButton.addEventListener("click", () =>
    showServices(womensServices, "Women's Services")
  );

  // Show checkout when clicking the checkout button
  document
    .querySelector(".checkout-btn")
    .addEventListener("click", showCheckout);

  // Handle form submission (send booking info)
  checkoutForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("name");
    const contact = document.getElementById("contact");
    const address = document.getElementById("address");
    await sendEmail(
      name.value,
      contact.value,
      address.value,
      selectedServices.map((e) => e.name)
    );
    alert("Your booking has been sent!");
    checkoutModal.style.display = "none";
  });

  // Close any modal with the class 'close-btn'
  const closeButtons = document.querySelectorAll(".close-btn");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Optional: Close the modal if clicking outside of the modal content
  window.addEventListener("click", (event) => {
    if (event.target === serviceModal) {
      serviceModal.style.display = "none";
    } else if (event.target === checkoutModal) {
      checkoutModal.style.display = "none";
    }
  });
});


async function sendEmail(name, contact_number, address, items) {
  const cloudFunctionUrl =
    "https://us-central1-serverless-web-apis-test.cloudfunctions.net/rashmiemail";
  try {
    const response = await fetch(cloudFunctionUrl, {
      method: "POST",
      body: JSON.stringify({
        name,
        contact_number,
        address,
        items
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
