document.getElementById('hamburger-icon').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.remove('hidden');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.add('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const categoryItems = document.querySelectorAll(".category-item");
    const showMoreBtn = document.getElementById("show-more-btn");
    let currentCategory = "all"; // Default category
    let visibleCount = 4; // Number of initially visible items

    function filterItems(category) {
        currentCategory = category;
        visibleCount = 4; // Reset visible count when category changes

        let filteredItems = Array.from(categoryItems).filter(item => 
            category === "all" || item.getAttribute("data-category") === category
        );

        // Hide all items first
        categoryItems.forEach(item => item.style.display = "none");

        // Show only the first 4 items
        filteredItems.slice(0, visibleCount).forEach(item => item.style.display = "block");

        // Show the "Show More" button only if more than 4 items exist
        if (filteredItems.length > visibleCount) {
            showMoreBtn.style.display = "block";
        } else {
            showMoreBtn.style.display = "none";
        }

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("bg-blue-600"));

        // Add active class to clicked button
        filterButtons.forEach(btn => {
            if (btn.getAttribute("data-category") === category) {
                btn.classList.add("bg-blue-600");
            }
        });
    }

    // Add event listener to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            let selectedCategory = this.getAttribute("data-category");
            filterItems(selectedCategory);
        });
    });

    // Show more functionality
    showMoreBtn.addEventListener("click", function () {
        let filteredItems = Array.from(categoryItems).filter(item => 
            currentCategory === "all" || item.getAttribute("data-category") === currentCategory
        );

        let itemsToShow = filteredItems.slice(visibleCount, visibleCount + 4);
        itemsToShow.forEach(item => item.style.display = "block");

        visibleCount += 4;

        // Hide "Show More" button when all items are displayed
        if (visibleCount >= filteredItems.length) {
            showMoreBtn.style.display = "none";
        }
    });

    // Search functionality
    document.getElementById("search-icon").addEventListener("click", function () {
        let searchQuery = document.getElementById("search-input").value.toLowerCase();
        let filteredItems = Array.from(categoryItems).filter(item => 
            item.querySelector("h3").textContent.toLowerCase().includes(searchQuery)
        );

        // Hide all items first
        categoryItems.forEach(item => item.style.display = "none");

        // Show only first 4 results that match the search
        filteredItems.slice(0, 4).forEach(item => item.style.display = "block");

        // Show the "Show More" button if there are more than 4 results
        if (filteredItems.length > 4) {
            showMoreBtn.style.display = "block";
        } else {
            showMoreBtn.style.display = "none";
        }
    });

    // Enable search on "Enter" key press
    document.getElementById("search-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            document.getElementById("search-icon").click();
        }
    });

    // Initialize with "All" category
    filterItems("all");
});

//Whatapp model 

function openModal() {
    document.getElementById('whatsappModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('whatsappModal').classList.add('hidden');
}

document.getElementById("sendWhatsApp").addEventListener("click", function () {
    let message = document.getElementById("message").value;
    let whatsappURL = `https://wa.me/916200505664?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});

