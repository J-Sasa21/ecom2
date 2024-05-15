let navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
  const supplementsContainer = document.getElementById("supplements-container");

  // Fetch the supplement data asynchronously from products.json
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      // Process the retrieved JSON data
      data.forEach(function (supplement) {
        const supplementElement = document.createElement("div");
        supplementElement.classList.add("product");

        const imageElement = document.createElement("img");
        imageElement.src = supplement.image;
        imageElement.alt = supplement.name;
        supplementElement.appendChild(imageElement);

        const nameElement = document.createElement("h3");
        nameElement.textContent = supplement.name;
        supplementElement.appendChild(nameElement);

        const brandElement = document.createElement("p");
        brandElement.textContent = "Brand: " + supplement.brand;
        supplementElement.appendChild(brandElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = supplement.description;
        supplementElement.appendChild(descriptionElement);

        const priceElement = document.createElement("p");
        priceElement.textContent = "Price: $" + supplement.price.toFixed(2);
        supplementElement.appendChild(priceElement);

        supplementsContainer.appendChild(supplementElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching supplement data:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlideIndex = 0;
  const intervalTime = 3000; // Change slides every 3 seconds

  function nextSlide() {
    slides[currentSlideIndex].style.display = "none";
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }
    slides[currentSlideIndex].style.display = "block";
  }

  // Show the first slide
  slides[currentSlideIndex].style.display = "block";

  // Set interval to change slides automatically
  setInterval(nextSlide, intervalTime);
});
