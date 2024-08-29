const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");
let menuOpen = false;

menuIcon.addEventListener("click", () => {
  if (menuOpen) {
    menuIcon.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
    nav.style.display = "none";
  } else {
    menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    nav.style.display = "flex";
  }

  menuOpen = !menuOpen;
  console.log(menuIcon.innerHTML);
});

// Code to shorten URL using TinyURL API via Axios

document.getElementById("urlForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const urlInput = document.getElementById("url");
  const resultElement = document.getElementById("result");

  const url = urlInput.value.trim(); // Trim leading/trailing whitespace

  if (!url) {
    resultElement.style.display = "block";
    resultElement.textContent = "Please enter a URL!";
    resultElement.className = "error"; // Set the error class
    return;
  }

  try {
    const response = await axios.get(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );

    // TinyURL API returns the shortened URL as plain text
    const shortenedUrl = response.data;

    // Display the shortened URL
    resultElement.style.display = "block";
    resultElement.innerHTML = `Your Short URL: <a href="${shortenedUrl}" target="_blank" id="shortUrl">${shortenedUrl}</a>`;
    resultElement.className = "success"; // Set the success class
  } catch (error) {
    console.error("Axios error:", error);
    resultElement.textContent = `An error occurred: ${error.message}`;
    resultElement.className = "error";
  }
});

// Code to toggle open FAQ answer
const icon = document.getElementById("icon");
const answer = document.getElementById("faq__a");

// Initial state
let isOpen = false;

icon.addEventListener("click", () => {
  if (isOpen) {
    answer.style.display = "none";
    icon.src = "/assets/img/plus-icon.png";
  } else {
    answer.style.display = "block";
    icon.src = "/assets/img/minus-icon.png";
  }

  // Toggle the state
  isOpen = !isOpen;
});
