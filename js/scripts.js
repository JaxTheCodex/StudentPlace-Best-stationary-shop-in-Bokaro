const hamburgerIcon = document.getElementById('hamburger-icon');
const popupMenu = document.getElementById('popup-menu');
const closePopup = document.getElementById('close-popup');
const searchIcon = document.getElementById('search-icon');
const searchContainer = document.getElementById('search-container');

// Toggle popup menu
hamburgerIcon.addEventListener('click', () => {
    popupMenu.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popupMenu.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const filterButtons = document.querySelectorAll(".filter-btn");
    const categoryItems = document.querySelectorAll(".category-item");
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.getElementById("search-icon");
    const searchContainer = document.getElementById("search-container");

    // Ensure elements exist
    if (!filterButtons || !categoryItems) {
        console.error("Required elements for filtering are missing!");
        return;
    }

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            categoryItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Toggle search input visibility
    searchIcon.addEventListener("click", () => {
        if (searchContainer) {
            searchContainer.style.display = searchContainer.style.display === "block" ? "none" : "block";
        }
    });

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const searchQuery = searchInput.value.toLowerCase();

            categoryItems.forEach(item => {
                const itemName = item.querySelector("h3").textContent.toLowerCase();
                item.style.display = itemName.includes(searchQuery) ? "block" : "none";
            });
        });
    }
});

// Show WhatsApp Popup
const whatsappIcon = document.querySelector('.fa-whatsapp');
const whatsappPopup = document.getElementById('whatsapp-popup');
const closePopupBtn = document.getElementById('close-whatsapp-popup');

whatsappIcon.addEventListener('click', () => {
    whatsappPopup.style.display = 'block'; // Show the popup
});

closePopupBtn.addEventListener('click', () => {
    whatsappPopup.style.display = 'none'; // Hide the popup
});

// Search container code 
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const categoryItems = document.querySelectorAll(".category-item");

    searchInput.addEventListener("input", () => {
        const searchQuery = searchInput.value.toLowerCase();

        categoryItems.forEach(item => {
            const itemName = item.querySelector("h3").textContent.toLowerCase();

            if (itemName.includes(searchQuery)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

